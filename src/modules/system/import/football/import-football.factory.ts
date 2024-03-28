import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/models/api'
import { ApiSportsType } from '@/models/api-sports'

// Schemas
import { League } from '@/modules/feature/league/schema/league.schema'

// Utils
import { getRegionByCountryCode, getSubRegionByCountryCode } from '@/utils'
import { getCountryByName } from '@/utils/getCountryByName.util'

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
            slug: dto.api_id.toString(),

            // External Hook
            hook_available: true,
            hook_host: Api.HostType.API_SPORTS,
            hook_id: dto.api_id,

            // Data Coverage
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

            // Dates
            date_start: new Date(season.start),
            date_end: new Date(season.end),

            // Meta Data
            meta_country: league.meta.country,
            meta_region: league.meta.region,
            meta_subregion: league.meta.subregion,
            meta_keywords: [],
        }
    }

    leagueDTO(league: ApiSportsType.FootballLeague): Api.LeagueCreateParams {
        return {
            // General Info
            slug: league.league.name.toLowerCase().replaceAll(' ', '-'),
            name: league.league.name,

            // External Hook
            hook_available: true,
            hook_host: Api.HostType.API_SPORTS,
            hook_id: league.league.id,

            // Meta Data
            meta_country: league.country.code || Api.CountryType.WORLDWIDE,
            meta_region: getRegionByCountryCode(league.country.code as Api.CountryType),
            meta_subregion: getSubRegionByCountryCode(league.country.code as Api.CountryType),
            meta_keywords: [],

            // Settings
            settings_initialised: false,
            settings_published: false,
            settings_sanitized: false,
            settings_searchable: false,
        }
    }

    teamDTO(team: ApiSportsType.FootballTeam): Api.TeamCreateParams {
        const country = team.country.length > 2 ? getCountryByName(team.country) : (team.country as Api.CountryType)

        return {
            // External Hook
            hook_available: true,
            hook_host: Api.HostType.API_SPORTS,
            hook_id: team.id,

            // Info
            info_code: team.code,
            info_country: country,
            info_name: team.name,
            info_founded: team.founded,
            info_shortname: team.name,

            // Meta Data
            meta_country: country,
            meta_region: getRegionByCountryCode(country),
            meta_subregion: getSubRegionByCountryCode(country),
            meta_keywords: [],

            // Settings
            settings_published: false,
            settings_sanitized: false,
            settings_searchable: false,
        }
    }
}
