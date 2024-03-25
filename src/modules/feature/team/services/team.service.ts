import { Injectable } from '@nestjs/common'

// League
import { Team } from '@/team/schema/team.schema'
import { TeamRepository } from '@/team/team.repository'

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
}
