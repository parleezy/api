import { Injectable } from '@nestjs/common'
import { LeagueRepository } from './league.repository'
import { League } from './league.schema'

@Injectable()
export class LeagueService {
    constructor(private _leagueRepository: LeagueRepository) {}

    create(): Promise<League> {
        return this._leagueRepository.create({})
    }

    list(): Promise<League[]> {
        return this._leagueRepository.list()
    }

    retrieve(id: string): Promise<League> {
        return this._leagueRepository.retrieve(id)
    }
}
