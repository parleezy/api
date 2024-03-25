import { Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Competition
import { Competition } from './competition.schema'
import { CompetitionService } from './competition.service'

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
    async create(): Promise<Api.Response<Competition>> {
        const data = await this._competitionService.create()

        return {
            data,
            success: true,
        }
    }

    @Get(`:id`)
    async getById(@Param('id') id: string): Promise<Api.Response<Competition>> {
        const data = await this._competitionService.retrieve(id)

        return {
            data,
            success: true,
        }
    }
}
