import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { League, LeagueSchema } from './league.schema'
import { LeagueController } from './league.controller'
import { LeagueRepository } from './league.repository'
import { LeagueService } from './league.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
    controllers: [LeagueController],
    providers: [LeagueRepository, LeagueService],
    exports: [LeagueService],
})
export class LeagueModule {}
