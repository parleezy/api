import { Injectable } from '@nestjs/common'

// Schemas
import { Competition } from '@/modules/feature/competition/schema/competition.schema'
import { League } from '@/league/schema/league.schema'

// Services
import { ApiSportsService } from '@/modules/external/api-sports/services/api-sports.service'
import { CompetitionService } from '@/modules/feature/competition/services/competition.service'
import { LeagueService } from '@/modules/feature/league/services/league.service'

// Factory
import { ImportFootballFactory } from './import-football.factory'

// Types
import { Api } from '@/models/api'
import { ApiSportsType } from '@/models/api-sports'

@Injectable()
export class ImportFootballService {
    constructor(
        private _apiSportsService: ApiSportsService,
        private _importFactory: ImportFootballFactory,
        private _leagueService: LeagueService,
        private _competitionService: CompetitionService,
    ) {}

    private async _importCompetition(dto: Api.ImportFootballCompetitionParams): Promise<Competition> {
        const internal = await this._leagueService.retrieve(dto.league_id)
        const external = await this._apiSportsService.football.getLeagueById(internal.api.id.toString())

        const season = external.seasons.filter((s) => s.year === dto.api_id)[0]

        console.log(season[0])

        return this._competitionService.create(this._importFactory.competitionDTO(internal, dto))
    }

    private async _importLeague(id: string): Promise<League> {
        const league = await this._apiSportsService.football.getLeagueById(id)

        return this._leagueService.create(this._importFactory.leagueDTO(league))
    }

    retrieve(id: string): Promise<ApiSportsType.FootballLeague | null> {
        return this._apiSportsService.football.getLeagueById(id)
    }

    get import() {
        return {
            league: (id: string) => this._importLeague(id),
            competition: (dto: Api.ImportFootballCompetitionParams) => this._importCompetition(dto),
        }
    }
}
