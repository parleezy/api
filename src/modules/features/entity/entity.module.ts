import { Module } from '@nestjs/common'

// Entities
import { VenueModule } from './venue/venue.module'

@Module({
    imports: [VenueModule],
    exports: [VenueModule],
})
export class EntityModule {}
