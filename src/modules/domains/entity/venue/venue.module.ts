import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { VenueController } from './venue.controller'

// Services
import { VenueService } from './service/venue.service'

// Venue
import { Venue, VenueSchema } from './schema/venue.schema'
import { VenueRepository } from './venue.repository'
import { VenueFactory } from './factory/venue.factory'
@Module({
    imports: [MongooseModule.forFeature([{ name: Venue.name, schema: VenueSchema }])],
    controllers: [VenueController],
    providers: [VenueFactory, VenueRepository, VenueService],
    exports: [VenueService],
})
export class VenueModule {}
