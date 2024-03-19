import { Injectable } from '@nestjs/common'

// Team
import { Team } from './schema/team.schema'
import { TeamRepository } from './team.repository'

@Injectable()
export class TeamService {
    constructor(private _teamRepository: TeamRepository) {}

    async list(): Promise<Team[]> {
        return await this._teamRepository.list()
    }
}
