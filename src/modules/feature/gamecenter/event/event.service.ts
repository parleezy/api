import { Injectable } from '@nestjs/common'

// Association
import { EventRepository } from './event.repository'

@Injectable()
export class EventService {
    constructor(private _eventRepository: EventRepository) {}
}
