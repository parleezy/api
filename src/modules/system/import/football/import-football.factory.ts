import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/models/api'
import { ApiSportsType } from '@/models/api-sports'

// Schemas
import { League } from '@/modules/feature/league/schema/league.schema'

// Utils
import { getRegionByCountryCode, getSubRegionByCountryCode } from '@/utils'

@Injectable()
export class ImportFootballFactory {
    competitionDTO(league: League, dto: Api.ImportFootballCompetitionParams): Api.CompetitionCreateParams {
        return {
            league_id: dto.league_id,
            available: true,
            host: Api.HostType.API_SPORTS,
            id: dto.api_id,
            ...league.meta,
        }
    }

    leagueDTO(league: ApiSportsType.FootballLeague): Api.LeagueCreateParams {
        return {
            available: true,
            host: Api.HostType.API_SPORTS,
            id: league.league.id,
            name: league.league.name,
            country: league.country.code,
            region: getRegionByCountryCode(league.country.code as Api.CountryType),
            subregion: getSubRegionByCountryCode(league.country.code as Api.CountryType),
        }
    }
}
