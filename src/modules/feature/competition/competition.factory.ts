import { Injectable } from '@nestjs/common'

// Competition
import { Competition } from './schema/competition.schema'

// Types
import { Api } from '@/models/api'

@Injectable()
export class CompetitionFactory {
    create(dto: Api.CompetitionCreateParams): Competition {
        const competition = new Competition()

        competition.api = {
            available: dto.available,
            host: dto.host,
            id: dto.id,
        }

        competition.meta = {
            country: dto.country,
            region: dto.region,
            subregion: dto.subregion,
        }

        return competition
    }
}
