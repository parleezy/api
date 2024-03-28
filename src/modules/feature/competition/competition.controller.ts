import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Competition
import { Competition } from './schema/competition.schema'
import { CompetitionService } from './services/competition.service'

@Controller('competitions')
export class CompetitionController {
    constructor(private _competitionService: CompetitionService) {}

    @Get()
    async list(): Promise<Api.Response<Competition[]>> {
        const data = await this._competitionService.list()

        return {
            data,
            success: true,
        }
    }

    @Post()
    async create(@Body() dto: Api.CompetitionCreateParams): Promise<Api.Response<Competition>> {
        const data = await this._competitionService.create(dto)

        return {
            data,
            success: true,
        }
    }

    @Get(`:id`)
    async getById(@Param('id') id: string): Promise<Api.Response<Competition>> {
        const data = await this._competitionService.retrieve.id(id)

        return {
            data,
            success: true,
        }
    }
}
