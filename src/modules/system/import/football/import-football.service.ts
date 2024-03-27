import { Injectable } from '@nestjs/common'

// League
import { League } from '@/league/schema/league.schema'

// Models
import { LeagueService } from '@/modules/feature/league/services/league.service'
import { ApiSportsService } from '@/modules/external/api-sports/services/api-sports.service'
import { ImportFootballFactory } from './import-football.factory'

@Injectable()
export class ImportFootballService {
    constructor(
        private _apiSportsService: ApiSportsService,
        private _importFactory: ImportFootballFactory,
        private _leagueService: LeagueService,
    ) {}

    private async _importLeague(id: string): Promise<League> {
        const league = await this._apiSportsService.football.getLeagueById(id)

        return this._leagueService.create(this._importFactory.leagueDTO(league))
    }

    get import() {
        return {
            league: (id: string) => this._importLeague(id),
        }
    }
}
