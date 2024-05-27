import { User } from '@/domain/user/schema/user.schema'

// Template
import { PasswordChangedEmail } from './templates/PasswordChangedEmail/PasswordChangedEmail'
import { ForgotPasswordEmail } from './templates/ForgotPasswordEmail/ForgotPasswordEmail.template'
import { VerificationEmail } from './templates/VerificationEmail/VerificationEmail.template'

export class EmailConstructorService {
    get authentication() {
        return {
            emailVerification: (user: User) => VerificationEmail(user.credentials.email.verification.code),
            forgotPassword: (user: User, token: string) => ForgotPasswordEmail(user, token),
            passwordChanged: () => PasswordChangedEmail(),
        }
    }
}
