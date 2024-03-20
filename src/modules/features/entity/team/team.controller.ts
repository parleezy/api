import { Controller, Get, Post, Body, Param } from '@nestjs/common'

// Service
import { TeamService } from './team.service'

// Api
import { Api } from '@/data/types/api'

// Team
import { Team } from './schema/team.schema'

@Controller('teams')
export class TeamController {
    constructor(private _teamService: TeamService) {}

    @Post()
    async create(@Body() body: Api.TeamCreateParams): Promise<Api.Response<Team>> {
        const data = await this._teamService.create(body)

        return {
            data,
            success: true,
        }
    }

    @Get()
    async list(): Promise<Api.Response<Team[]>> {
        const data = await this._teamService.list()

        return {
            data,
            success: true,
        }
    }

    @Get(':id')
    async retrieveById(@Param('id') id: string): Promise<Api.Response<Team | null>> {
        const data = await this._teamService.retrieve.byId(id)

        return {
            data,
            success: true,
        }
    }
}
