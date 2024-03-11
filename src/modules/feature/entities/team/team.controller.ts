import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Service
import { TeamService } from './team.service'

// Types
import { Api } from '@/data/types/api'
import { Team } from './team.schema'

@Controller('team')
export class TeamController {
    constructor(private _teamService: TeamService) {}

    @Post()
    async create(@Body() dto: Api.TeamCreateParams): Promise<Api.Response<Team>> {
        const data = await this._teamService.create(dto)

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
