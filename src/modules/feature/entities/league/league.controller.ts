import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Service
import { LeagueService } from './league.service'

// Types
import { Api } from '@/data/types/api'
import { League } from './schema/league.schema'

@Controller('league')
export class LeagueController {
    constructor(private _leagueService: LeagueService) {}

    @Post()
    async create(@Body() dto: Api.LeagueCreateParams): Promise<Api.Response<League>> {
        const data = await this._leagueService.create(dto)

        return {
            data,
            success: true,
        }
    }

    @Get()
    async list(): Promise<Api.Response<League[]>> {
        const data = await this._leagueService.list()

        return {
            data,
            success: true,
        }
    }

    @Get(':id')
    async retrieveById(@Param('id') id: string): Promise<Api.Response<League | null>> {
        const data = await this._leagueService.retrieve.byId(id)

        return {
            data,
            success: true,
        }
    }
}
