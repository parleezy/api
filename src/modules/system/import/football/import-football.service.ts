import { Injectable } from '@nestjs/common'

// Schemas
import { Competition } from '@/modules/feature/competition/schema/competition.schema'
import { League } from '@/league/schema/league.schema'

// Services
import { ApiSportsService } from '@/modules/external/api-sports/services/api-sports.service'
import { CompetitionService } from '@/competition/services/competition.service'
import { LeagueService } from '@/league/services/league.service'
import { TeamService } from '@/team/services/team.service'

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
        private _competitionService: CompetitionService,
        private _leagueService: LeagueService,
        private _teamService: TeamService,
    ) {}

    private async _initialiseCompetition(id: string): Promise<Competition> {
        const competition = await this._competitionService.retrieve.id(id)
        const league = await this._leagueService.retrieve.id(competition.entities.league._id.toString())

        const [external_teams] = await Promise.all([
            await this._apiSportsService.football.getCompetitionTeams(league.hook.id, competition.hook.id),
        ])

        const teams = await Promise.all(
            external_teams.map(async (obj) => {
                let exists = await this._teamService.retrieve.external(obj.team.id)

                if (!exists) {
                    exists = await this._teamService.create(this._importFactory.teamDTO(obj.team))
                }

                return exists
            }),
        )

        return await this._competitionService.addTeams(competition, teams)
    }

    private async _importCompetition(dto: Api.ImportFootballCompetitionParams): Promise<Competition> {
        const league_internal = await this._leagueService.retrieve.id(dto.league_id)
        const league_external = await this._apiSportsService.football.getLeagueById(league_internal.hook.id.toString())
        const season = league_external.seasons.filter((s) => s.year === dto.api_id)

        return this._competitionService.create(
            this._importFactory.competitionDTO(league_internal, league_external, season[0], dto),
        )
    }

    private async _importLeague(id: string): Promise<League> {
        const league = await this._apiSportsService.football.getLeagueById(id)

        return this._leagueService.create(this._importFactory.leagueDTO(league))
    }

    retrieve(id: string): Promise<ApiSportsType.FootballLeague | null> {
        return this._apiSportsService.football.getLeagueById(id)
    }

    get initialise() {
        return {
            competition: (id: string) => this._initialiseCompetition(id),
        }
    }

    get import() {
        return {
            league: (id: string) => this._importLeague(id),
            competition: (dto: Api.ImportFootballCompetitionParams) => this._importCompetition(dto),
        }
    }
}
