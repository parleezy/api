import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

// Event
import { Event } from '@/models/event'

// League
import { LeagueService } from './league.service'

@Injectable()
export class LeagueListenerService {
    constructor(private _leagueService: LeagueService) {}

    @OnEvent(Event.CompetitionCreated)
    async handleCompetitionCreated(payload: Event.CompetitionEventPayload): Promise<void> {
        if (payload.entity_type === 'LEAGUE') {
            await this._leagueService.addCompetition(payload.entity_id, payload.competition)
        }
    }
}
