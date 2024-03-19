import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schema
import { Team, TeamSchema } from './schema/team.schema'
@Module({
    imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
    controllers: [],
    providers: [],
    exports: [],
})
export class TeamModule {}
