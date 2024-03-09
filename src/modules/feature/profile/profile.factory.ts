import { Injectable } from '@nestjs/common'
import { Types } from 'mongoose'

// Utils
import { Profile } from './profile.schema'

// Modules
import { Player } from '@/modules/feature/player/schema/player.schema'

@Injectable()
export class ProfileFactory {
    create(player: Player): Profile {
        const profile = new Profile()

        profile.player = player._id as unknown as Types.ObjectId

        return profile
    }
}
