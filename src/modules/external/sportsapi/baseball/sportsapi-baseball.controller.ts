import { Controller, Get, Param, Query } from '@nestjs/common'

// Service
import { SportsApiBaseballService } from './sportsapi-baseball.service'

// Types
import { Api } from '@/data/types/api'
import { SportsApi } from '@/data/types/sportsapi'

@Controller('sportsapi/baseball')
export class SportsApiBaseballController {
    constructor(private _baseballService: SportsApiBaseballService) {}

    @Get('/leagues')
    async listLeagues(
        @Query('country') country: string,
        @Query('season') season: string,
    ): Promise<Api.Response<SportsApi.BaseballLeague[]>> {
        const data = await this._baseballService.league.list(country, season)

        return {
            data,
            success: true,
        }
    }

    @Get('/leagues/search')
    async searchLeagues(@Query('term') term: string): Promise<Api.Response<SportsApi.BaseballLeague[]>> {
        const data = term.length > 2 ? await this._baseballService.league.search(term) : []

        return {
            data,
            success: true,
        }
    }

    @Get('/leagues/:id')
    async retrieveLeagueById(@Param('id') id: string): Promise<Api.Response<SportsApi.BaseballLeague | null>> {
        const data = await this._baseballService.league.byId(id)

        return {
            data,
            success: true,
        }
    }
}
