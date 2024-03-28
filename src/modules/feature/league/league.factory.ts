import { Injectable } from '@nestjs/common'

// Fixture
import { League } from './schema/league.schema'

// Api
import { Api } from '@/models/api'

@Injectable()
export class LeagueFactory {
    create(dto: Api.LeagueCreateParams): League {
        const league = new League()

        league.slug = dto.slug

        league.hook = {
            available: dto.hook_available,
            host: dto.hook_host,
            id: dto.hook_id,
        }

        league.info = {
            name: dto.name,
        }

        league.meta = {
            country: dto.meta_country,
            region: dto.meta_region,
            subregion: dto.meta_subregion,
            keywords: dto.meta_keywords,
        }

        league.settings = {
            initialised: dto.settings_initialised,
            published: dto.settings_published,
            sanitized: dto.settings_sanitized,
            searchable: dto.settings_searchable,
        }

        return league
    }
}
