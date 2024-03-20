import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/data/types/api'

// Schemas
import { League } from './schema/league.schema'

@Injectable()
export class LeagueFactory {
    create(dto: Api.LeagueCreateParams): League {
        return this.assignProperties(new League(), dto)
    }

    update(league: League, dto: Api.LeagueUpdateParams): League {
        return this.assignProperties(league, dto)
    }

    private assignProperties(league: League, dto: Api.LeagueCreateParams | Api.LeagueUpdateParams): League {
        console.log(dto)

        return league
    }

    private filterProperties(
        dto: Api.LeagueCreateParams | Api.LeagueUpdateParams,
        properties: string[],
    ): Partial<League> {
        return properties.reduce((acc, prop) => {
            if (dto[prop] !== undefined) {
                acc[prop] = dto[prop]
            }
            return acc
        }, {})
    }
}
