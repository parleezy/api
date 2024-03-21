import { Module } from '@nestjs/common'

// Modules
import { ApiSportsFootballService } from './services/apisports-football.service'

@Module({
    providers: [ApiSportsFootballService],
    exports: [ApiSportsFootballService],
})
export class ApiSportsModule {}
