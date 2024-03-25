import { Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// League
import { Venue } from './schema/venue.schema'
import { VenueService } from './services/venue.service'

@Controller('venues')
export class VenueController {
    constructor(private _venueService: VenueService) {}

    @Get()
    async list(): Promise<Api.Response<Venue[]>> {
        const data = await this._venueService.list()

        return {
            data,
            success: true,
        }
    }

    @Post()
    async create(): Promise<Api.Response<Venue>> {
        const data = await this._venueService.create()

        return {
            data,
            success: true,
        }
    }

    @Get(`:id`)
    async getById(@Param('id') id: string): Promise<Api.Response<Venue>> {
        const data = await this._venueService.retrieve(id)

        return {
            data,
            success: true,
        }
    }
}
