import { Module } from '@nestjs/common'

// Modules
import { ApiSportsModule } from '@/modules/external/api-sports/api-sports.module'
import { LeagueModule } from '@/modules/feature/league/league.module'

// Football
import { ImportFootballController } from './import-football.controller'
import { ImportFootballService } from './import-football.service'
import { ImportFootballFactory } from './import-football.factory'

@Module({
    controllers: [ImportFootballController],
    imports: [ApiSportsModule, LeagueModule],
    providers: [ImportFootballService, ImportFootballFactory],
})
export class ImportFootballModule {}
