import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Player
import { Player, PlayerSchema } from './schema/player.schema'
import { PlayerFactory } from './player.factory'
import { PlayerRepository } from './player.repository'

// Service
import { PlayerService } from './player.service'

// Controllers
import { PlayerController } from './player.controller'

// Utils
import { StringEncryptor } from '@/shared/utils/string-encryptor'

@Module({
    imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }])],
    controllers: [PlayerController],
    providers: [StringEncryptor, PlayerFactory, PlayerRepository, PlayerService],
    exports: [PlayerService],
})
export class PlayerModule {}
