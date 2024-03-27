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
    competitionDTO(
        league: League,
        api_league: ApiSportsType.FootballLeague,
        season: ApiSportsType.FootballSeason,
        dto: Api.ImportFootballCompetitionParams,
    ): Api.CompetitionCreateParams {
        return {
            league_id: dto.league_id,
            api_available: true,
            api_host: Api.HostType.API_SPORTS,
            api_id: dto.api_id,
            competition_type: api_league.league.type,
            coverage_events: season.coverage.fixtures.events,
            coverage_lineups: season.coverage.fixtures.lineups,
            coverage_statistics_players: season.coverage.fixtures.statistics_fixtures,
            coverage_statistics_teams: season.coverage.fixtures.statistics_players,
            coverage_predictions: season.coverage.predictions,
            coverage_odds: season.coverage.odds,
            coverage_assists: season.coverage.top_assists,
            coverage_cards: season.coverage.top_cards,
            coverage_players: season.coverage.players,
            coverage_scorers: season.coverage.top_scorers,
            coverage_standings: season.coverage.standings,
            date_start: new Date(season.start),
            date_end: new Date(season.end),
            country: league.meta.country,
            region: league.meta.region,
            subregion: league.meta.subregion,
        }
    }

    leagueDTO(league: ApiSportsType.FootballLeague): Api.LeagueCreateParams {
        return {
            api_available: true,
            api_host: Api.HostType.API_SPORTS,
            api_id: league.league.id,
            name: league.league.name,
            country: league.country.code,
            region: getRegionByCountryCode(league.country.code as Api.CountryType),
            subregion: getSubRegionByCountryCode(league.country.code as Api.CountryType),
        }
    }
}
