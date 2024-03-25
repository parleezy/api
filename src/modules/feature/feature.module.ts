import { Module } from '@nestjs/common'

// League
import { CompetitionModule } from './competition/competition.module'
import { FixtureModule } from './fixture/fixture.module'
import { LeagueModule } from './league/league.module'
import { TeamModule } from './team/team.module'
import { VenueModule } from './venue/venue.module'

@Module({
    imports: [CompetitionModule, FixtureModule, LeagueModule, TeamModule, VenueModule],
    exports: [CompetitionModule, FixtureModule, LeagueModule, TeamModule, VenueModule],
})
export class FeatureModule {}
