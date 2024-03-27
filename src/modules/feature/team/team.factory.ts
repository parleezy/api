import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/models/api'
import { Team } from './schema/team.schema'

@Injectable()
export class TeamFactory {
    create(dto: Api.TeamCreateParams): Team {
        const team = new Team()

        team.api = {
            available: dto.api_available,
            host: dto.api_host,
            id: dto.api_id,
        }

        return team
    }
}
