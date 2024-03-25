import { Module } from '@nestjs/common'

// League
import { CompetitionModule } from './competition/competition.module'
import { LeagueModule } from './league/league.module'
import { TeamModule } from './team/team.module'
import { VenueModule } from './venue/venue.module'

@Module({
    imports: [CompetitionModule, LeagueModule, TeamModule, VenueModule],
    exports: [CompetitionModule, LeagueModule, TeamModule, VenueModule],
})
export class FeatureModule {}
