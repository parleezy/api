import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/data/types/api'

// Schema
import { Team } from './schema/team.schema'
import { TeamApiSchema } from './schema/team-api.schema'
import { TeamColorSchema } from './schema/team-color.schema'
import { TeamIdentitySchema } from './schema/team-identity.schema'
import { TeamLocationSchema } from './schema/team-location.schema'
import { TeamSettingsSchema } from './schema/team-settings.schema'

@Injectable()
export class TeamFactory {
    create(dto: Api.TeamCreateParams): Team {
        return this.assignProperties(new Team(), dto)
    }

    update(team: Team, dto: Api.TeamCreateParams): Team {
        return this.assignProperties(team, dto)
    }

    private assignProperties(team: Team, dto: Api.TeamCreateParams): Team {
        team.api = {
            ...team.api,
            ...this.filterProperties(dto, Object.keys(TeamApiSchema.paths)),
        }

        team.color = {
            ...team.color,
            ...this.filterProperties(dto, Object.keys(TeamColorSchema.paths)),
        }

        team.identity = {
            ...team.identity,
            ...this.filterProperties(dto, Object.keys(TeamIdentitySchema.paths)),
        }

        team.location = {
            ...team.location,
            ...this.filterProperties(dto, Object.keys(TeamLocationSchema.paths)),
        }

        team.settings = {
            ...team.settings,
            ...this.filterProperties(dto, Object.keys(TeamSettingsSchema.paths)),
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
