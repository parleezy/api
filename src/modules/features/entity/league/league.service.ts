import { Injectable } from '@nestjs/common'

// Repositorry
import { LeagueRepository } from './league.repository'
import { LeagueFactory } from './league.factory'

@Injectable()
export class LeagueService {
    constructor(
        private _leagueFactory: LeagueFactory,
        private _leagueRepository: LeagueRepository,
    ) {}
}
