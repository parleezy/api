import { Body, Controller, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Competition
import { Competition } from './schema/competition.schema'
import { CompetitionService } from './services/competition.service'

@Controller('competitions')
export class CompetitionController {
    constructor(private _competitionService: CompetitionService) {}

    @Post()
    async create(@Body() dto: Api.CompetitionCreateParams): Promise<Api.Response<Competition>> {
        const data = await this._competitionService.create(dto)

        return {
            data,
            success: true,
        }
    }
}
