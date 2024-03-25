import { Module } from '@nestjs/common'

// League
import { CompetitionModule } from './competition/competition.module'
import { LeagueModule } from './league/league.module'

@Module({
    imports: [CompetitionModule, LeagueModule],
    exports: [CompetitionModule, LeagueModule],
})
export class FeatureModule {}
