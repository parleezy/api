import { Competition } from '@/competition/competition.schema'

export interface CompetitionEventPayload {
    competition: Competition
    entity_type: string
    entity_id: string
}
