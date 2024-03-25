import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'

// Event
import { Event } from '@/models/event'

// League
import { AssociationService } from './association.service'

@Injectable()
export class AssociationListenerService {
    constructor(private _associationService: AssociationService) {}

    @OnEvent(Event.CompetitionCreated)
    async handleCompetitionCreated(payload: Event.CompetitionEventPayload): Promise<void> {
        if (payload.entity_type === 'COMPETITION') {
            await this._associationService.addCompetition(payload.entity_id, payload.competition)
        }
    }
}
