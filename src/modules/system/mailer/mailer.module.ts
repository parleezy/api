import { Module } from '@nestjs/common'

// Mailer Service
import { EmailConstructorService } from './email/email-construtor.service'
import { MailerListenerService } from './services/mailer-listener.service'
import { MailerService } from './services/mailer.service'

@Module({
    providers: [MailerListenerService, MailerService, EmailConstructorService],
})
export class MailerModule {}
