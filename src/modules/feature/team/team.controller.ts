import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// League
import { Team } from './schema/team.schema'
import { TeamService } from './services/team.service'

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

    @Post()
    async create(@Body() dto: Api.TeamCreateParams): Promise<Api.Response<Team>> {
        const data = await this._teamService.create(dto)

        return {
            data,
            success: true,
        }
    }

    @Get(`:id`)
    async getById(@Param('id') id: string): Promise<Api.Response<Team>> {
        const data = await this._teamService.retrieve.id(id)

        return {
            data,
            success: true,
        }
    }
}
