import { Injectable } from '@nestjs/common'

// Team
import { TeamRepository } from './team.repository'

@Injectable()
export class TeamService {
    constructor(private _teamRepository: TeamRepository) {}
}
