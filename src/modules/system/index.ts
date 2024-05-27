import { Module } from '@nestjs/common'

// Modules
import { ActivityModule } from './activity'
import { DiagnosticModule } from './diagnostic'
import { MailerModule } from './mailer/mailer.module'

@Module({
    imports: [ActivityModule, DiagnosticModule, MailerModule],
})
export class SystemModule {}
