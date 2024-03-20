import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/data/types/api'

// Schema
import { Team } from './schema/team.schema'
import { TeamIdentitySchema } from './schema/team-identity.schema'

@Injectable()
export class TeamFactory {
    create(dto: Api.TeamCreateParams): Team {
        return this.assignProperties(new Team(), dto)
    }

    private assignProperties(team: Team, dto: Api.TeamCreateParams): Team {
        team.identity = {
            ...team.identity,
            ...this.filterProperties(dto, Object.keys(TeamIdentitySchema.paths)),
        }

        return team
    }

    private filterProperties(dto: Api.TeamCreateParams, properties: string[]): Partial<Team> {
        return properties.reduce((acc, prop) => {
            if (dto[prop] !== undefined) {
                acc[prop] = dto[prop]
            }
            return acc
        }, {})
    }
}
