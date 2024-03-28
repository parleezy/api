import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/models/api'
import { Team } from './schema/team.schema'

@Injectable()
export class TeamFactory {
    create(dto: Api.TeamCreateParams): Team {
        const team = new Team()

        team.hook = {
            available: dto.hook_available,
            host: dto.hook_host,
            id: dto.hook_id,
        }

        team.info = {
            code: dto.info_code,
            country: dto.info_country,
            founded: dto.info_founded,
            name: dto.info_name,
            shortname: dto.info_name,
        }

        team.meta = {
            country: dto.meta_country,
            region: dto.meta_region,
            subregion: dto.meta_subregion,
            keywords: dto.meta_keywords,
        }

        team.settings = {
            published: dto.settings_published,
            sanitized: dto.settings_sanitized,
            searchable: dto.settings_searchable,
        }

        return team
    }
}
