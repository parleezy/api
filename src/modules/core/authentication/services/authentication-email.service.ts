import { BadRequestException, ConflictException, Injectable } from '@nestjs/common'
import { Request } from 'express'
import * as dateFns from 'date-fns'

// Data
import { System } from '@/models/system'
import { Core } from '@/models/core'

// Schemas
import { User } from '@/domain/user/schema/user.schema'

// Services
import { AuthenticationService } from './authentication.service'

@Injectable()
export class AuthenticationEmailService extends AuthenticationService {
    async forgotPassword(dto: Core.EmailRecoveryParams, req: Request): Promise<User> {
        const exists = await this._userService.retrieve.byEmail(dto.email)

        if (!exists) {
            throw new BadRequestException({
                message: 'Cannot recover account.',
                details: [],
            })
        }

        if (exists.tokens.recovery.message_sent) {
            if (!dateFns.isPast(dateFns.addMinutes(exists.tokens.recovery.message_sent, 5))) {
                throw new BadRequestException({
                    message: 'Cannot resend email.',
                    details: ['Maximum emails sent for this user please wait 5 minutes.'],
                })
            }
        }

        const token = this._stringEncryptor.generateRandomString(9)
        const user = await this._userService.account.generateForgotPasswordToken(exists._id, token)

        this._eventEmitter.emit(System.EventType.FORGOT_PASSWORD_REQUEST, { user, token, req })

        return user
    }

    async login(dto: Core.EmailLoginParams, req: Request): Promise<Core.Tokens> {
        const user = await this._userService.retrieve.byEmail(dto.email)

        if (!user || !this._stringEncryptor.compare(dto.password, user.credentials.email.password)) {
            throw new BadRequestException({
                message: 'Login failed.',
            })
        }

        const tokens = await this._loginUser(user)

        if (!tokens) {
            throw new BadRequestException({
                message: 'Login failed.',
            })
        }

        this._eventEmitter.emit(System.EventType.LOGIN, { user, tokens, req })

        return tokens
    }

    async signup(dto: Core.EmailSignupParams, req: Request): Promise<User> {
        const exists = await this._userService.retrieve.byEmail(dto.email)

        if (exists) {
            throw new ConflictException({
                message: 'Cannot register user.',
                details: [],
            })
        }

        const user = await this._userService.signup.withEmail(dto)

        if (!user) {
            throw new BadRequestException({
                message: 'Cannot register user.',
                details: [],
            })
        }

        this._eventEmitter.emit(System.EventType.SIGNUP_WITH_EMAIL, { user, req })

        return user
    }

    async resetPassword(dto: Core.EmailResetParams, req: Request): Promise<Core.Tokens> {
        const exists = await this._userService.retrieve.byId(dto.id)

        if (!exists) {
            throw new BadRequestException({
                message: 'Cannot recover account.',
                details: [],
            })
        }

        if (
            dateFns.isPast(new Date(exists.tokens.recovery.expiry)) ||
            !this._stringEncryptor.compare(dto.token, exists.tokens.recovery.token)
        ) {
            throw new BadRequestException({
                message: 'Token expired.',
                details: [],
            })
        }

        const user = await this._userService.account.resetPassword(exists._id, dto.password)

        this._eventEmitter.emit(System.EventType.FORGOT_PASSWORD_RESET, { user, req })

        const tokens = await this._loginUser(user)

        if (!tokens) {
            throw new BadRequestException({
                message: 'Login failed.',
            })
        }

        this._eventEmitter.emit(System.EventType.LOGIN, { user, tokens, req })

        return tokens
    }

    async resendVerification(id: string, req: Request): Promise<User> {
        const user = await this._userService.retrieve.byId(id)

        if (!user) {
            throw new BadRequestException({
                message: 'Cannot resend email.',
                details: [],
            })
        }

        if (
            user.credentials.email.verification.message_sent &&
            !dateFns.isPast(dateFns.addMinutes(user.credentials.email.verification.message_sent, 5))
        ) {
            throw new BadRequestException({
                message: 'Cannot resend email.',
                details: ['Maximum emails sent for this user please wait 5 minutes.'],
            })
        }

        const updated = await this._userService.verify.generateNewEmailCode(id)

        this._eventEmitter.emit(System.EventType.RESEND_EMAIL_VERIFICATION, { user: updated, req })

        return updated
    }

    async verifyCode(dto: Core.EmailVerificationCodeParams, id: string, req: Request): Promise<Core.Tokens> {
        const user = await this._userService.retrieve.byId(id)

        if (!user) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        const isValid = user.credentials.email.verification.code === parseInt(dto.code)

        if (!isValid) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        const verified = await this._userService.verify.emailCode(user._id)

        if (!verified) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        const tokens = await this._loginUser(verified)

        if (!tokens) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        this._eventEmitter.emit(System.EventType.VERIFIED_EMAIL_CODE, { user, tokens, req })

        return tokens
    }

    async verifyLink(dto: Core.EmailVerificationLinkParams, req: Request): Promise<Core.Tokens> {
        const user = await this._userService.retrieve.byId(dto.id)

        if (!user) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        if (
            dateFns.isPast(new Date(user.credentials.email.verification.expiry)) ||
            user.credentials.email.verification.token !== dto.token
        ) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        const verified = await this._userService.verify.emailCode(user._id)

        if (!verified) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        const tokens = await this._loginUser(verified)

        if (!tokens) {
            throw new BadRequestException({
                message: 'Cannot verify user.',
                details: [],
            })
        }

        this._eventEmitter.emit(System.EventType.VERIFIED_EMAIL_LINK, { user, tokens, req })

        return tokens
    }
}
