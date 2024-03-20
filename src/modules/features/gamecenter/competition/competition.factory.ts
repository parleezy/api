import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/data/types/api'

// Schemas
import { Competition } from './schema/competition.schema'
import { CompetitionApiSchema } from './schema/competition-api.schema'
import { CompetitionConfigSchema } from './schema/competition-config.schema'
import { CompetitionParticipantsSchema } from './schema/competition-participants.schema'
import { CompetitionSettingsSchema } from './schema/competition-settings.schema'

@Injectable()
export class CompetitionFactory {
    create(dto: Api.CompetitionCreateParams): Competition {
        return this.assignProperties(new Competition(), dto)
    }

    update(competition: Competition, dto: Api.CompetitionUpdateParams): Competition {
        return this.assignProperties(competition, dto)
    }

    private assignProperties(competition: Competition, dto: Api.CompetitionCreateParams): Competition {
        competition.status = competition.status
        competition.type = dto.type || competition.type

        competition.api = {
            ...competition.api,
            ...this.filterProperties(dto, Object.keys(CompetitionApiSchema.paths)),
        }

        competition.config = {
            ...competition.config,
            ...this.filterProperties(dto, Object.keys(CompetitionConfigSchema.paths)),
        }

        competition.participants = {
            ...competition.participants,
            ...this.filterProperties(dto, Object.keys(CompetitionParticipantsSchema.paths)),
        }

        competition.settings = {
            ...competition.settings,
            ...this.filterProperties(dto, Object.keys(CompetitionSettingsSchema.paths)),
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
