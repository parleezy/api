import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { League, LeagueSchema } from './schema/league.schema'
import { LeagueController } from './league.controller'
import { LeagueFactory } from './league.factory'
import { LeagueRepository } from './league.repository'
import { LeagueService } from './league.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
    controllers: [LeagueController],
    providers: [LeagueFactory, LeagueRepository, LeagueService],
    exports: [LeagueService],
})
export class LeagueModule {}
