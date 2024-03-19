import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schema
import { Team, TeamSchema } from './schema/team.schema'
import { TeamController } from './team.controller'
import { TeamRepository } from './team.repository'
import { TeamService } from './team.service'
@Module({
    imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
    controllers: [TeamController],
    providers: [TeamRepository, TeamService],
    exports: [TeamService],
})
export class TeamModule {}
