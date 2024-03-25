import { Injectable } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'

// Events
import { Event } from '@/models/event'

// Schemas
import { Competition } from '@/competition/competition.schema'

@Injectable()
export class CompetitionEventService {
    constructor(private _eventEmitter: EventEmitter2) {}

    competitionCreated(competition: Competition, entity_type: string, entity_id: string): void {
        this._eventEmitter.emit(Event.CompetitionCreated, {
            competition,
            entity_type,
            entity_id,
        })
    }
}
