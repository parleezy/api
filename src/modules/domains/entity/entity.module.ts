import { Module } from '@nestjs/common'

// Entities
import { AssociationModule } from './association/association.module'
import { LeagueModule } from './league/league.module'
import { TeamModule } from './team/team.module'
import { VenueModule } from './venue/venue.module'

@Module({
    imports: [AssociationModule, LeagueModule, TeamModule, VenueModule],
    exports: [AssociationModule, LeagueModule, TeamModule, VenueModule],
})
export class EntityModule {}
