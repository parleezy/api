import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schema
import { League, LeagueSchema } from './league.schema'

@Module({
    imports: [MongooseModule.forFeature([{ name: League.name, schema: LeagueSchema }])],
    controllers: [],
    providers: [],
    exports: [],
})
export class LeagueModule {}
