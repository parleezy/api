import { Module } from '@nestjs/common'

// Football
import { ApiSportsFootballService } from './services/api-sports-football.service'

@Module({
    providers: [ApiSportsFootballService],
    exports: [ApiSportsFootballService],
})
export class ApiSportsModule {}
