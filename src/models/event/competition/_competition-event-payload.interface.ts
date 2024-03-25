import { Competition } from '@/competition/competition.schema'

export interface CompetitionEventPayload {
    competition: Competition
    league_id: string
}
