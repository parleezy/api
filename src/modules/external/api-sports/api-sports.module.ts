import { Module } from '@nestjs/common'

// Services
import { ApiSportsService } from './services/api-sports.service'
import { ApiSportsFootballService } from './services/api-sports-football.service'

@Module({
    providers: [ApiSportsService, ApiSportsFootballService],
    exports: [ApiSportsService],
})
export class ApiSportsModule {}
