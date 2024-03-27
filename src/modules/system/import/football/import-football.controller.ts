import { Controller, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// League
import { League } from '@/league/schema/league.schema'

// External
import { ImportFootballService } from './import-football.service'

@Controller('import/football')
export class ImportFootballController {
    constructor(private _importFootballService: ImportFootballService) {}

    @Post('league/:id')
    async importLeague(@Param('id') id: string): Promise<Api.Response<League>> {
        const data = await this._importFootballService.import.league(id)

        return {
            data,
            success: true,
        }
    }
}
