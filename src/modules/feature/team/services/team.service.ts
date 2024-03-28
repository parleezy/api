import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/models/api'

// League
import { Team } from '@/team/schema/team.schema'
import { TeamFactory } from '@/team/team.factory'
import { TeamRepository } from '@/team/team.repository'

@Injectable()
export class TeamService {
    constructor(
        private _teamFactory: TeamFactory,
        private _teamRepository: TeamRepository,
    ) {}

    create(dto: Api.TeamCreateParams): Promise<Team> {
        return this._teamRepository.create(this._teamFactory.create(dto))
    }

    list(): Promise<Team[]> {
        return this._teamRepository.list()
    }

    get retrieve() {
        return {
            id: (id: string): Promise<Team | null> => {
                return this._teamRepository.retrieve(id)
            },
            external: (id: number): Promise<Team | null> => {
                const team = this._teamRepository.search({
                    'hook.id': id,
                })

                return team[0]
            },
        }
    }
}
