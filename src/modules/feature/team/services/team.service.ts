import { Injectable } from '@nestjs/common'

// League
import { Team } from '@/team/schema/team.schema'
import { TeamRepository } from '@/team/team.repository'

// Competition
import { Competition } from '@/competition/competition.schema'

@Injectable()
export class TeamService {
    constructor(private _teamRepository: TeamRepository) {}

    create(): Promise<Team> {
        return this._teamRepository.create({})
    }

    list(): Promise<Team[]> {
        return this._teamRepository.list()
    }

    retrieve(id: string): Promise<Team> {
        return this._teamRepository.retrieve(id)
    }

    async addCompetition(league: string, competition: Competition): Promise<Team> {
        return await this._teamRepository.update(league, { $push: { competitions: competition._id } })
    }
}
