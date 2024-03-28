import { Injectable } from '@nestjs/common'
import { Types } from 'mongoose'

// Competition
import { Competition } from './schema/competition.schema'

// Types
import { Api } from '@/models/api'

@Injectable()
export class CompetitionFactory {
    create(dto: Api.CompetitionCreateParams): Competition {
        const competition = new Competition()

        competition.slug = dto.slug

        competition.hook = {
            available: dto.hook_available,
            host: dto.hook_host,
            id: dto.hook_id,
        }

        // Coverage
        competition.coverage = {
            fixtures: {
                events: dto.coverage_events,
                lineups: dto.coverage_lineups,
                statistics_players: dto.coverage_statistics_players,
                statistics_teams: dto.coverage_statistics_teams,
            },
            markets: {
                predictions: dto.coverage_predictions,
                odds: dto.coverage_odds,
            },
            statistics: {
                assists: dto.coverage_assists,
                cards: dto.coverage_cards,
                players: dto.coverage_players,
                scorers: dto.coverage_players,
            },
            table: {
                standings: dto.coverage_standings,
            },
        }

        // Dates
        competition.dates = {
            start: dto.date_start,
            end: dto.date_end,
        }

        // Entities
        competition.entities = {
            league: dto.league_id as unknown as Types.ObjectId,
        }

        // Meta Data
        competition.meta = {
            country: dto.meta_country,
            region: dto.meta_region,
            subregion: dto.meta_subregion,
            keywords: dto.meta_keywords,
        }

        // Participants
        competition.participants = {
            teams: [],
        }

        return competition
    }
}
