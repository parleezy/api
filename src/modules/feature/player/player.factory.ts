import { Injectable } from '@nestjs/common'
import * as dateFns from 'date-fns'

// Data
import { Player } from './schema/player.schema'

// Types
import { Api } from '@/data/types/api'

// Utils
import { StringEncryptor } from '@/shared/utils/string-encryptor'

@Injectable()
export class PlayerFactory {
    constructor(private readonly _stringEncryptor: StringEncryptor) {}

    create(dto: Api.PlayerCreateParams): Player {
        const player= new Player()

        player.credentials = {
            email: dto.email,
            password: this._stringEncryptor.generate(dto.password),
            role: Api.RoleType.PLAYER,
            verified: false,
        }

        player.tokens = {
            jwt: {
                refresh: null,
            },
            recovery: {
                token: null,
                expiry: null,
            },
            verification: {
                numeric: this._stringEncryptor.generateRandomSixDigitCode(),
                token: this._stringEncryptor.generateRandomString(20),
                expiry: dateFns.addHours(new Date(), 6).getTime(),
            },
        }

        return player
    }
}
