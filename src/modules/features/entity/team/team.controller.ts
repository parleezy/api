import { Controller, Get } from '@nestjs/common'

// Service
import { TeamService } from './team.service'

// Api
import { Api } from '@/data/types/api'

// Team
import { Team } from './schema/team.schema'

@Controller('teams')
export class TeamController {
    constructor(private _teamService: TeamService) {}

    @Get()
    async list(): Promise<Api.Response<Team[]>> {
        const data = await this._teamService.list()

        return {
            data,
            success: true,
        }
    }
}
