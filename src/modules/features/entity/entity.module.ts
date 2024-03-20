import { Module } from '@nestjs/common'

// Entities
import { AssociationModule } from './association/association.module'
import { TeamModule } from './team/team.module'
import { VenueModule } from './venue/venue.module'

@Module({
    imports: [AssociationModule, TeamModule, VenueModule],
    exports: [AssociationModule, TeamModule, VenueModule],
})
export class EntityModule {}
