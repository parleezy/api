import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

// Data
import { System } from '@/models/system'

// Services
import { User } from '@/domain/user/schema/user.schema'
import { MailerService } from './mailer.service'

interface UserProps {
    user: User
}

interface UserPropsWithToken extends UserProps {
    token: string
}

@Injectable()
export class MailerListenerService {
    constructor(private _mailerService: MailerService) {}

    @OnEvent(System.EventType.SIGNUP_WITH_EMAIL)
    handleUserCreated({ user }: UserProps): void {
        this._mailerService.sendWelcomeEmail(user)
    }

    @OnEvent(System.EventType.FORGOT_PASSWORD_REQUEST)
    forgotPassword({ user, token }: UserPropsWithToken): void {
        this._mailerService.sendForgotPasswordEmail(user, token)
    }

    @OnEvent(System.EventType.FORGOT_PASSWORD_RESET)
    passwordChanged({ user }: UserProps): void {
        this._mailerService.sendPasswordChangedEmail(user)
    }

    @OnEvent(System.EventType.RESEND_EMAIL_VERIFICATION)
    resendUserVerification({ user }: UserProps): void {
        this._mailerService.sendWelcomeEmail(user)
    }
}
