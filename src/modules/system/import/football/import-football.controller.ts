import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Schemas
import { League } from '@/league/schema/league.schema'
import { Competition } from '@/modules/feature/competition/schema/competition.schema'

// External
import { ImportFootballService } from './import-football.service'
import { ApiSportsType } from '@/models/api-sports'

@Controller('import/football')
export class ImportFootballController {
    constructor(private _importFootballService: ImportFootballService) {}

    @Post('league/:id')
    async importLeague(@Param('id') id: string): Promise<Api.Response<League>> {
        const data = await this._importFootballService.import.league(id)

        return {
            data,
            success: true,
        }
    }

    @Get('league/:id')
    async getLeagueInfo(@Param('id') id: string): Promise<Api.Response<ApiSportsType.FootballLeague | null>> {
        const data = await this._importFootballService.retrieve(id)

        return {
            data,
            success: true,
        }
    }

    @Post('competition')
    async importCompetition(@Body() dto: Api.ImportFootballCompetitionParams): Promise<Api.Response<Competition>> {
        const data = await this._importFootballService.import.competition(dto)

        return {
            data,
            success: true,
        }
    }
}
