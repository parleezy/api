import { Body, Controller, Post, Get, Query, Sse } from '@nestjs/common'
import { interval, map, take } from 'rxjs'

// Api
import { Api } from '@/models/api'
import { ApiSportsType } from '@/models/sports-data'

// Competition
import { Competition } from './schema/competition.schema'
import { CompetitionService } from './services/competition.service'
import { SportsDataService } from '@/sports-data/sports-data.service'

@Controller('competitions')
export class CompetitionController {
    constructor(
        private _competitionService: CompetitionService,
        private _sportsData: SportsDataService,
    ) {}

    @Post()
    async create(@Body() dto: Api.CompetitionCreateParams): Promise<Api.Response<Competition>> {
        const data = await this._competitionService.create(dto)

        return {
            data,
            success: true,
        }
    }

    @Get('import')
    async listLeagues(): Promise<Api.Response<ApiSportsType.FootballLeague[]>> {
        const data = await this._sportsData.apisports.football.listLeagues()

        return {
            data,
            success: true,
        }
    }

    @Get('teams')
    async getTeams(
        @Query() query: { season: string; league: string },
    ): Promise<Api.Response<ApiSportsType.FootballTeam[]>> {
        console.log(query)

        const data = await this._sportsData.apisports.football.getCompetitionTeams(query.league, query.season)

        return {
            data,
            success: true,
        }
    }

    @Sse('stream')
    stream() {
        return interval(1000).pipe(
            take(5), // Emit 5 events and then complete
            map((i) => ({ data: { step: i + 1, message: `Event ${i + 1}` } })),
        )
    }
}
