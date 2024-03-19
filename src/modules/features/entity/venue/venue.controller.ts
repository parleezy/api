import { Api } from '@/data/types/api'
import { Body, Controller, Post } from '@nestjs/common'

// Venue
import { Venue } from './schema/venue.schema'
import { VenueService } from './venue.service'

@Controller('venues')
export class VenueController {
    constructor(private _venueService: VenueService) {}

    @Post()
    async create(@Body() body: Api.VenueCreateParams): Promise<Api.Response<Venue>> {
        const data = await this._venueService.create(body)

        return {
            data,
            success: true,
        }
    }
}
