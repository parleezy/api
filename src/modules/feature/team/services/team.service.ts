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

    private _retrieveByAPI(id: string): Promise<Team> {
        return this._teamRepository.retrieve(id)
    }

    get retrieve() {
        return {
            id: (id: string): Promise<Team | null> => {
                return this._teamRepository.retrieve(id)
            },
            api: (id: number): Promise<Team | null> => {
                const team = this._teamRepository.search({
                    'api.id': id,
                })

                return team[0]
            },
        }
    }
}
