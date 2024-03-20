import { Api } from '@/data/types/api'
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'

// Competition
import { Competition } from './schema/competition.schema'
import { CompetitionService } from './competition.service'

@Controller('competitions')
export class CompetitionController {
    constructor(private _competitionService: CompetitionService) {}

    @Post()
    async create(@Body() body: Api.CompetitionCreateParams): Promise<Api.Response<Competition>> {
        const data = await this._competitionService.create(body)

        return {
            data,
            success: true,
        }
    }

    @Get()
    async list(): Promise<Api.Response<Competition[]>> {
        const data = await this._competitionService.list()

        return {
            data,
            success: true,
        }
    }

    @Get(':id')
    async retrieveById(@Param('id') id: string): Promise<Api.Response<Competition | null>> {
        const data = await this._competitionService.retrieve.byId(id)

        return {
            data,
            success: true,
        }
    }

    @Patch(':id')
    async updateById(
        @Param('id') id: string,
        @Body() body: Api.CompetitionUpdateParams,
    ): Promise<Api.Response<Competition | null>> {
        const data = await this._competitionService.update(id, body)

        return {
            data,
            success: true,
        }
    }
}
