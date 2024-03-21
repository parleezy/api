import { Controller, Get } from '@nestjs/common'

@Controller('competitions')
export class CompetitionController {
    @Get()
    version() {
        return {
            success: true,
            api: 0.1,
            data: {
                message: 'Competition.',
            },
        }
    }
}
