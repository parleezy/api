import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { LeagueController } from './league.controller'

// Services
import { LeagueService } from './league.service'

// League
import { League, LeagueSchema } from './league.schema'
import { LeagueRepository } from './league.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
    controllers: [LeagueController],
    providers: [LeagueRepository, LeagueService],
    exports: [LeagueService],
})
export class LeagueModule {}
