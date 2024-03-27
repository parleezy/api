import { Injectable } from '@nestjs/common'

// Fixture
import { League } from './schema/league.schema'

// Api
import { Api } from '@/models/api'

@Injectable()
export class LeagueFactory {
    create(dto: Api.LeagueCreateParams): League {
        const league = new League()

        league.api = {
            available: dto.available,
            host: dto.host,
            id: dto.id,
        }

        league.info = {
            name: dto.name,
        }

        league.meta = {
            country: dto.country,
            region: dto.region,
            subregion: dto.subregion,
        }

        return league
    }
}
