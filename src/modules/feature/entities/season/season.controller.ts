import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Service
import { SeasonService } from './season.service'

// Types
import { Api } from '@/data/types/api'
import { Season } from './schema/season.schema'

@Controller('season')
export class SeasonController {
    constructor(private _seasonService: SeasonService) {}

    @Post()
    async create(@Body() dto: Api.SeasonCreateParams): Promise<Api.Response<Season>> {
        const data = await this._seasonService.create(dto)

        return {
            data,
            success: true,
        }
    }

    @Get()
    async list(): Promise<Api.Response<Season[]>> {
        const data = await this._seasonService.list()

        return {
            data,
            success: true,
        }
    }

    @Get(':id')
    async retrieveById(@Param('id') id: string): Promise<Api.Response<Season | null>> {
        const data = await this._seasonService.retrieve.byId(id)

        return {
            data,
            success: true,
        }
    }
}
