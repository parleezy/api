import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { League, LeagueSchema } from './schema/league.schema'
import { LeagueController } from './league.controller'
import { LeagueFactory } from './league.factory'
import { LeagueRepository } from './league.repository'
import { LeagueService } from './service/league.service'
import { LeagueListenerService } from './service/league-listener.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
    controllers: [LeagueController],
    providers: [LeagueFactory, LeagueRepository, LeagueService, LeagueListenerService],
    exports: [LeagueService],
})
export class LeagueModule {}
