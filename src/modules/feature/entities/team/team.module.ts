import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { TeamController } from './team.controller'

// Services
import { TeamService } from './team.service'

// Team
import { Team, TeamSchema } from './team.schema'
import { TeamRepository } from './team.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: Team.name, schema: TeamSchema }])],
    controllers: [TeamController],
    providers: [TeamRepository, TeamService],
    exports: [TeamService],
})
export class TeamModule {}
