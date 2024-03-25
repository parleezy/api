import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { Venue, VenueSchema } from './schema/venue.schema'
import { VenueController } from './venue.controller'
import { VenueRepository } from './venue.repository'
import { VenueService } from './services/venue.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Venue.name, schema: VenueSchema }])],
    controllers: [VenueController],
    providers: [VenueRepository, VenueService],
    exports: [VenueService],
})
export class VenueModule {}
