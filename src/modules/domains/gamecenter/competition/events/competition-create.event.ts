import { Competition } from '@/competition/schema/competition.schema'

export class CompetitionCreatedEvent {
    constructor(
        public competition: Competition,
        public leagueId: string,
    ) {}
}
