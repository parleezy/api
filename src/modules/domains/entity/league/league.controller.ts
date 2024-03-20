import { Controller, Post, Body } from '@nestjs/common'

// Api
import { Api } from '@/data/types/api'

// League
import { LeagueService } from './league.service'
import { League } from './schema/league.schema'

@Controller('leagues')
export class LeagueController {
    constructor(private _leagueService: LeagueService) {}

    @Post()
    async create(@Body() body: Api.LeagueCreateParams): Promise<Api.Response<League>> {
        const data = await this._leagueService.create(body)

        return {
            data,
            success: true,
        }
    }
}
