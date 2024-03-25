import { Module } from '@nestjs/common'

// Services
import { ApiSportsService } from './services/apisports.service'
import { ApiSportsFootballService } from './services/apisports-football.service'

@Module({
    providers: [ApiSportsService, ApiSportsFootballService],
    exports: [ApiSportsService],
})
export class ApiSportsModule {}
