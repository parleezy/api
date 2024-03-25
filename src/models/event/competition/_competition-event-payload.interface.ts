import { Competition } from '@/modules/feature/competition/schema/competition.schema'

export interface CompetitionEventPayload {
    competition: Competition
    league_id: string
}
