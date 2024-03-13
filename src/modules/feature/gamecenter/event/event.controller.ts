import { Controller } from '@nestjs/common'

// Service
import { EventService } from './event.service'

@Controller('events')
export class EventController {
    constructor(private _eventService: EventService) {}
}
