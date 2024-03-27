import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/models/api'
import { ApiSportsType } from '@/models/api-sports'

// Utils
import { getRegionByCountryCode, getSubRegionByCountryCode } from '@/utils'

@Injectable()
export class ImportFootballFactory {
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
