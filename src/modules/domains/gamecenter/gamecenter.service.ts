import { Injectable } from '@nestjs/common'

// Types
import { CompetitionService } from './competition/competition.service'
import { LeagueService } from '../entity/league/league.service'

@Injectable()
export class GamecenterService {
    constructor(
        private _competitionService: CompetitionService,
        private _leagueService: LeagueService,
    ) {}
}
