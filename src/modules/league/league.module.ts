import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { LeagueService } from './league.service'
import { League, LeagueSchema } from './league.schema'

@Module({
    imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
    controllers: [],
    providers: [LeagueService],
    exports: [LeagueService],
})
export class LeagueModule {}
