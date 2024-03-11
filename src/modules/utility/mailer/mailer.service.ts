import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import * as SendGrid from '@sendgrid/mail'

// Schema
import { Player } from '@/modules/feature/user-management/player/schema/player.schema'

@Injectable()
export class MailerService {
    constructor(private readonly _configService: ConfigService) {
        SendGrid.setApiKey(this._configService.get<string>('sendgrid.key'))
    }

    async send(mail: SendGrid.MailDataRequired): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await SendGrid.send(mail)
    }

    async sendWelcomeEmail(player: Player): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await this.send({
            to: player.credentials.email,
            subject: 'Welcome to Parleezy!',
            from: 'Account Recovery <no-reply@parleezy.com>',
            html: `You signed up for an account bitch`,
        })
    }

    async sendPasswordRecoveryEmail(
        player: Player,
        token: string,
    ): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await this.send({
            to: player.credentials.email,
            subject: 'Follow the steps to recover your account!',
            from: 'Account Recovery <no-reply@parleezy.com>',
            html: `
                Hey, looks like you forgot your password. Click the following link to reset your password <a href="https://parleezy.com?id=${player._id}&token=${token}">Reset Password</a>
            `,
        })
    }

    async sendPasswordResetEmail(player: Player): Promise<[SendGrid.ClientResponse, Record<string, never>]> {
        return await this.send({
            to: player.credentials.email,
            subject: 'Password Changed.',
            from: 'Parleezy Security <security@parleezy.com>',
            html: `
                Your password has been changed, if you did not initiate this request please reply to this email.
            `,
        })
    }
}
