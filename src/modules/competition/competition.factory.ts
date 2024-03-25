import { Injectable } from '@nestjs/common'

import { Api } from '@/models/api'

// Competition
import { Competition } from './schema/competition.schema'
import { CompetitionDatesSchema } from './schema/competition-dates.schema'

@Injectable()
export class CompetitionFactory {
    create(dto: Api.CompetitionCreateParams): Competition {
        return this.assignProperties(new Competition(), dto)
    }

    private assignProperties(competition: Competition, dto: Api.CompetitionCreateParams): Competition {
        competition.dates = {
            ...competition.dates,
            ...this.filterProperties(dto, Object.keys(CompetitionDatesSchema.paths)),
        }

        return competition
    }

    private filterProperties(dto: Api.CompetitionCreateParams, properties: string[]): Partial<Competition> {
        return properties.reduce((acc, prop) => {
            if (dto[prop] !== undefined) {
                acc[prop] = dto[prop]
            }
            return acc
        }, {})
    }
}
