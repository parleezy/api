import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

// Data
import { Core } from '@/models/core'
import { System } from '@/models/system'

// User
import { User } from '@/domain/user/schema/user.schema'
import { UserRepository } from '@/domain/user/user.repository'

// Utils
import { StringEncryptor } from '@/shared/utils'

interface UserProps {
    user: User
}

interface UserPropsWithTokens extends UserProps {
    tokens: Core.Tokens
}

@Injectable()
export class UserAuthenticationListenerService {
    constructor(
        private _stringEncryptor: StringEncryptor,
        private _userRepository: UserRepository,
    ) {}

    private _saveRefreshToken(user: User, tokens: Core.Tokens): void {
        this._userRepository.update(user._id, {
            'tokens.jwt.refresh': this._stringEncryptor.generate(tokens.refresh),
        })
    }

    private _updateMessageDate(user: User): void {
        this._userRepository.update(user._id, {
            'credentials.email.verification.message_sent': new Date(),
        })
    }

    @OnEvent(System.EventType.LOGIN)
    userHasLoggedIn({ user, tokens }: UserPropsWithTokens): void {
        this._saveRefreshToken(user, tokens)
    }

    @OnEvent(System.EventType.LOGOUT)
    userHasLoggedOut({ user }: UserProps): void {
        this._userRepository.update(user._id, {
            'tokens.jwt.refresh': null,
        })
    }

    @OnEvent(System.EmailEventType.FORGOT_PASSWORD_EMAIL_SENT)
    forgotPasswordEmailSent({ user }: UserProps): void {
        this._userRepository.update(user._id, {
            'tokens.recovery.message_sent': new Date(),
        })
    }

    @OnEvent(System.EventType.REFRESH)
    tokenRefreshed({ user, tokens }: UserPropsWithTokens): void {
        this._saveRefreshToken(user, tokens)
    }

    @OnEvent(System.EventType.RESEND_EMAIL_VERIFICATION)
    resendEmailVerification({ user }: UserProps): void {
        this._updateMessageDate(user)
    }

    @OnEvent(System.EventType.VERIFIED_EMAIL_CODE)
    verifiedEmailCode({ user, tokens }: UserPropsWithTokens): void {
        this._saveRefreshToken(user, tokens)
    }

    @OnEvent(System.EventType.VERIFIED_EMAIL_LINK)
    verifiedEmailLink({ user, tokens }: UserPropsWithTokens): void {
        this._saveRefreshToken(user, tokens)
    }

    @OnEvent(System.EmailEventType.VERIFICATION_EMAIL_SENT)
    verificationEmailSent(user: User): void {
        this._updateMessageDate(user)
    }
}
