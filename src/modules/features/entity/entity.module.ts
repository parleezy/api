import { Module } from '@nestjs/common'

// Entities
import { TeamModule } from './team/team.module'
import { VenueModule } from './venue/venue.module'

@Module({
    imports: [TeamModule, VenueModule],
    exports: [TeamModule, VenueModule],
})
export class EntityModule {}
