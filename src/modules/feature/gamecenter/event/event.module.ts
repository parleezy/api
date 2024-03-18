import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { EventController } from './event.controller'

// Services
import { EventService } from './event.service'

// Event
import { Event, EventSchema } from './schema/event.schema'
import { EventRepository } from './event.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: Event.name, schema: EventSchema }])],
    controllers: [EventController],
    providers: [EventRepository, EventService],
    exports: [EventService],
})
export class EventModule {}
