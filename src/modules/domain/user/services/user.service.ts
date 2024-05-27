import { Types } from 'mongoose'
import { ConflictException, Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'
import * as dateFns from 'date-fns'

// User
import { User } from '@/domain/user/schema/user.schema'
import { UserFactory } from '@/domain/user/user.factory'
import { UserRepository } from '@/domain/user/user.repository'

// Data
import { Core } from '@/models/core'

// Player
import { PlayerService } from '@/domain/player/services/player.service'

// Utils
import { StringEncryptor } from '@/shared/utils'

@Injectable()
export class UserService {
    constructor(
        protected _eventEmitter: EventEmitter2,
        protected _playerService: PlayerService,
        protected _stringEncryptor: StringEncryptor,
        protected _userFactory: UserFactory,
        protected _userRepository: UserRepository,
    ) {}

    get signup() {
        return {
            withEmail: async (dto: Core.EmailSignupParams): Promise<User> => {
                const user = await this._userRepository.create(this._userFactory.signupWithEmail(dto))

                if (!user) {
                    throw new ConflictException({
                        message: 'Cannot register user.',
                        details: [],
                    })
                }

                const player = await this._playerService.create({ user: user._id as unknown as Types.ObjectId })

                if (!player) {
                    throw new ConflictException({
                        message: 'Cannot register user.',
                        details: [],
                    })
                }

                return user
            },
        }
    }

    get retrieve() {
        return {
            byEmail: async (email: string): Promise<User | null> => {
                return await this._userRepository.findOne({ 'credentials.email.email': email })
            },
            byId: async (id: string): Promise<User | null> => {
                return await this._userRepository.retrieve(id)
            },
        }
    }

    get account() {
        return {
            generateForgotPasswordToken: async (id: string, password: string): Promise<User> => {
                return await this._userRepository.update(id, {
                    'tokens.recovery.token': this._stringEncryptor.generate(password),
                    'tokens.recovery.expiry': dateFns.addMinutes(new Date(), 9),
                    'tokens.recovery.message_sent': null,
                })
            },
            resetPassword: async (id: string, password: string) => {
                return await this._userRepository.update(id, {
                    'credentials.email.password': this._stringEncryptor.generate(password),
                })
            },
        }
    }

    get verify() {
        return {
            emailCode: async (id: string): Promise<User> => {
                return await this._userRepository.update(id, {
                    verified: true,
                    'credentials.email.verification.verified': true,
                    'credentials.email.verification.code': null,
                    'credentials.email.verification.token': null,
                    'credentials.email.verification.expiry': null,
                    'credentials.email.verification.message_sent': null,
                })
            },
            generateNewEmailCode: async (id: string): Promise<User> => {
                return await this._userRepository.update(id, {
                    'credentials.email.verification.code': this._stringEncryptor.generateRandomDigitCode(),
                    'credentials.email.verification.token': this._stringEncryptor.generateRandomString(9),
                    'credentials.email.verification.expiry': dateFns.addMinutes(new Date(), 9),
                    'credentials.email.verification.message_sent': null,
                })
            },
        }
    }
}
