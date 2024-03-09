import { BadRequestException, Injectable } from '@nestjs/common'

// Data
import { Api } from '@/data/types/api'

// Services
import { JwtService } from '@/modules/utility/jwt/jwt.service'
import { MailerService } from '@/modules/utility/mailer/mailer.service'
import { PlayerService } from '@/modules/feature/player/player.service'
import { ProfileService } from '@/modules/feature/profile/profile.service'
import { StripeService } from '@/modules/utility/stripe/services'


// Utils
import { StringEncryptor } from '@/shared/utils/string-encryptor'

@Injectable()
export class AuthenticationService {
    constructor(
        private _jwtService: JwtService,
        private _mailerService: MailerService,
        private _profileService: ProfileService,
        private _stripeService: StripeService,
        private _playerService: PlayerService,

        private _stringEncryptor: StringEncryptor,
    ) {}

    async login(dto: Api.EmailLoginParams): Promise<Api.Tokens> {
        const player = await this._playerService.retrieve.byEmail(dto.email)

        if (!player) {
            throw new BadRequestException('Cannot verify account')
        }

        const profile = await this._profileService.retrieve.byPlayer(player._id)
        const tokens = await this._jwtService.buildTokens(player, profile)

        await Promise.all([
            this._playerService.update.properties(player, {
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
            }),
        ])

        return tokens
    }

    async logout(payload: Api.JwtPayload): Promise<void> {
        const player = await this._playerService.retrieve.byId(payload.player)

        if (!player) {
            throw new BadRequestException('Invalid token.')
        }

        await Promise.all([
            this._playerService.update.properties(player, {
                'tokens.jwt.refresh': null,
            }),
        ])

        return
    }

    async refresh(payload: Api.JwtRefreshPayload): Promise<Api.Tokens> {
        const [player, profile] = await Promise.all([
            this._playerService.retrieve.byId(payload.player),
            this._profileService.retrieve.byId(payload.profile),
        ])
        if (!player) {
            throw new BadRequestException('Invalid token.')
        }

        const isValid = this._stringEncryptor.compare(payload.refresh, player.tokens.jwt.refresh)

        if (!isValid) {
            throw new BadRequestException('Invalid token.')
        }

        const tokens = await this._jwtService.buildTokens(player, profile)

        await Promise.all([
            this._playerService.update.properties(player, {
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
            }),
        ])

        return tokens
    }

    async signup(dto: Api.EmailSignupParams): Promise<Api.Tokens> {
        const exists = await this._playerService.retrieve.byEmail(dto.email)

        if (exists) {
            throw new BadRequestException('Cannot create player with this email.')
        }

        const player = await this._playerService.create(dto)

        if (!player) {
            throw new BadRequestException('Cannot create player with this email.')
        }

        const [profile, stripe] = await Promise.all([
            this._profileService.create(player),
            this._stripeService.Customer.create({ email: dto.email }),
        ])

        if (!profile) {
            throw new BadRequestException('Cannot create player with this email.')
        }

        const tokens = await this._jwtService.buildTokens(player, profile)

        await Promise.all([
            this._playerService.update.properties(player, {
                'payments.stripeid': stripe.id,
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
            }),
            this._mailerService.sendWelcomeEmail(player),
        ])

        return tokens
    }

    // TODO
    async resendEmailVerification(): Promise<void> {
        // await this._mailerService.sendPasswordResetEmail({})

        return
    }

    async verifyEmail(dto: Api.EmailVerificationParams): Promise<Api.Tokens> {
        const player = await this._playerService.retrieve.byId(dto.id)

        if (!player) {
            throw new BadRequestException('Cannot verify account')
        }

        if (
            dto.token !== player.tokens.verification.token &&
            parseInt(dto.numeric) !== player.tokens.verification.numeric
        ) {
            throw new BadRequestException('Cannot verify account')
        }

        const profile = await this._profileService.retrieve.byPlayer(player._id)
        const tokens = await this._jwtService.buildTokens(player, profile)

        await Promise.all([
            this._playerService.update.properties(player, {
                'credentials.verified': true,
                'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
                'tokens.verification.expiry': null,
                'tokens.verification.numeric': null,
                'tokens.verification.token': null,
            }),
        ])

        return tokens
    }
}
