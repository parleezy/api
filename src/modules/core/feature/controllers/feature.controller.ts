import { Controller, Get, Post, Body } from '@nestjs/common'

// Data
import { Api } from '@/models/api'
import { Core } from '@/models/core'

// Feature
import { Feature } from '@/core/feature/schema/feature.schema'
import { FeatureService } from '@/core/feature/services/feature.service'

@Controller('features')
export class FeatureController {
    constructor(private _featureService: FeatureService) {}

    @Get()
    async list(): Promise<Api.Response<Feature[]>> {
        const data = await this._featureService.retrieve.list()

        return {
            data,
            success: true,
        }
    }

    @Post()
    async create(@Body() dto: Core.CreateFeatureParams): Promise<Api.Response<Feature>> {
        const data = await this._featureService.create(dto)

        return {
            data,
            success: true,
        }
    }
}
