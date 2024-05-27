import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Player
import { Player, PlayerSchema } from './schema/player.schema'
import { PlayerController } from './controllers/player.controller'
import { PlayerRepository } from './player.repository'
import { PlayerService } from './services/player.service'
import { PlayerFactory } from './player.factory'

// Data
import { System } from '@/models/system'

@Module({
    imports: [MongooseModule.forFeature([{ name: Player.name, schema: PlayerSchema }], System.DatabaseName.DOMAIN)],
    controllers: [PlayerController],
    providers: [PlayerFactory, PlayerService, PlayerRepository],
    exports: [PlayerService],
})
export class PlayerModule {}
