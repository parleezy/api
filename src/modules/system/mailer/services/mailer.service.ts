import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as SendGrid from '@sendgrid/mail'
import { EventEmitter2 } from '@nestjs/event-emitter'

// User
import { User } from '@/domain/user/schema/user.schema'

// Services
import { EmailConstructorService } from '../email/email-construtor.service'
import { System } from '@/models/system'

@Injectable()
export class MailerService {
    constructor(
        private readonly _configService: ConfigService,
        private _eventEmitter: EventEmitter2,
        private _emailConstructorService: EmailConstructorService,
    ) {
        SendGrid.setApiKey(this._configService.get<string>('sendgrid.key'))
    }

    async send(mail: SendGrid.MailDataRequired): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await SendGrid.send(mail)
    }

    async sendForgotPasswordEmail(
        user: User,
        token: string,
    ): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        const email = await this.send({
            to: user.credentials.email,
            subject: 'Follow the steps to recover your account!',
            from: 'Account Recovery <no-reply@bytequiz.com>',
            html: this._emailConstructorService.authentication.forgotPassword(user, token),
        })

        this._eventEmitter.emit(System.EmailEventType.FORGOT_PASSWORD_EMAIL_SENT, { user })

        return email
    }

    async sendWelcomeEmail(user: User): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        const email = await this.send({
            to: user.credentials.email.email,
            subject: `${user.credentials.email.verification.code}. Activate your account!`,
            from: 'Jason from Byte Quiz <no-reply@bytequiz.com>',
            html: this._emailConstructorService.authentication.emailVerification(user),
        })

        this._eventEmitter.emit(System.EmailEventType.VERIFICATION_EMAIL_SENT, { user })

        return email
    }

    async sendPasswordChangedEmail(user: User): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await this.send({
            to: user.credentials.email,
            subject: 'Password Changed.',
            from: 'ByteQuiz Security <security@bytequiz.com>',
            html: this._emailConstructorService.authentication.passwordChanged(),
        })
    }
}
