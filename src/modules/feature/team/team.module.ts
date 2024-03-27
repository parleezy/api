import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { Team, TeamSchema } from './schema/team.schema'
import { TeamController } from './team.controller'
import { TeamFactory } from './team.factory'
import { TeamRepository } from './team.repository'
import { TeamService } from './services/team.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
    controllers: [TeamController],
    providers: [TeamFactory, TeamRepository, TeamService],
    exports: [TeamService],
})
export class TeamModule {}
