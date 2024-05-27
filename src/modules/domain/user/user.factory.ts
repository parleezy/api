import { Injectable } from '@nestjs/common'
import * as dateFns from 'date-fns'

// Data
import { Core } from '@/models/core'

// Schema
import { User } from './schema/user.schema'

// Utils
import { StringEncryptor } from '@/shared/utils'

@Injectable()
export class UserFactory {
    constructor(private readonly _stringEncryptor: StringEncryptor) {}

    signupWithEmail(dto: Core.EmailSignupParams): User {
        const user = new User()

        user.role = Core.RoleType.PLAYER
        user.verified = false

        user.credentials = {
            email: {
                email: dto.email,
                password: this._stringEncryptor.generate(dto.password),
                verification: {
                    verified: false,
                    code: this._stringEncryptor.generateRandomDigitCode(),
                    token: this._stringEncryptor.generateRandomString(9),
                    expiry: dateFns.addMinutes(new Date(), 9),
                    message_sent: null,
                },
            },
        }

        user.tokens = {
            jwt: {
                refresh: null,
            },
            recovery: {
                expiry: null,
                token: null,
                message_sent: null,
            },
        }

        return user
    }
}
