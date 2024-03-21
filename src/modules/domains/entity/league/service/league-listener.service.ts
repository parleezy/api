import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

// Service
import { LeagueService } from './league.service'

// Event
import { CompetitionCreatedEvent } from '@/modules/domains/gamecenter/competition/events/competition-create.event'

@Injectable()
export class LeagueListenerService {
    constructor(private _leagueService: LeagueService) {}

    @OnEvent('competition.created')
    async handleCompetitionCreated(event: CompetitionCreatedEvent) {
        // Logic to add the competition to the league
        console.log(event, 'Handle this shit')
    }
}
