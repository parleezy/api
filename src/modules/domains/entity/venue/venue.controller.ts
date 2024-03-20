import { Api } from '@/data/types/api'
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'

// Venue
import { Venue } from './schema/venue.schema'
import { VenueService } from './service/venue.service'

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

    @Get()
    async list(): Promise<Api.Response<Venue[]>> {
        const data = await this._venueService.list()

        return {
            data,
            success: true,
        }
    }

    @Get(':id')
    async retrieveById(@Param('id') id: string): Promise<Api.Response<Venue | null>> {
        const data = await this._venueService.retrieve.byId(id)

        return {
            data,
            success: true,
        }
    }

    @Patch(':id')
    async updateById(
        @Param('id') id: string,
        @Body() body: Api.VenueUpdateParams,
    ): Promise<Api.Response<Venue | null>> {
        const data = await this._venueService.update(id, body)

        return {
            data,
            success: true,
        }
    }
}
