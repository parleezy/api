import { Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// League
import { League } from './league.schema'
import { LeagueService } from './league.service'

@Controller('leagues')
export class LeagueController {
    constructor(private _leagueService: LeagueService) {}

    @Get()
    async list(): Promise<Api.Response<League[]>> {
        const data = await this._leagueService.list()

        return {
            data,
            success: true,
        }
    }

    @Post()
    async create(): Promise<Api.Response<League>> {
        const data = await this._leagueService.create()

        return {
            data,
            success: true,
        }
    }

    @Get(`:id`)
    async getById(@Param('id') id: string): Promise<Api.Response<League>> {
        const data = await this._leagueService.retrieve(id)

        return {
            data,
            success: true,
        }
    }
}
