import { Module } from '@nestjs/common'

// Modules
import { ApiSportsModule } from '@/modules/external/api-sports/api-sports.module'
import { CompetitionModule } from '@/modules/feature/competition/competition.module'
import { LeagueModule } from '@/modules/feature/league/league.module'

// Football
import { ImportFootballController } from './import-football.controller'
import { ImportFootballService } from './import-football.service'
import { ImportFootballFactory } from './import-football.factory'
import { TeamModule } from '@/modules/feature/team/team.module'

@Module({
    controllers: [ImportFootballController],
    imports: [ApiSportsModule, CompetitionModule, LeagueModule, TeamModule],
    providers: [ImportFootballService, ImportFootballFactory],
})
export class ImportFootballModule {}
