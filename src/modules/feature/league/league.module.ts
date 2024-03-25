import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { League, LeagueSchema } from './schema/league.schema'
import { LeagueController } from './league.controller'
import { LeagueRepository } from './league.repository'
import { LeagueListenerService } from './services/league-listener.service'
import { LeagueService } from './services/league.service'
import { LeagueFactory } from './league.factory'

@Module({
    imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
    controllers: [LeagueController],
    providers: [LeagueFactory, LeagueListenerService, LeagueRepository, LeagueService],
    exports: [LeagueService],
})
export class LeagueModule {}
