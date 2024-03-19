import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/data/types/api'
import { Venue } from './schema/venue.schema'

@Injectable()
export class VenueFactory {
    create(dto: Api.VenueCreateParams): Venue {
        const venue = new Venue()

        venue.type = dto.type

        venue.address = {
            street: dto.street,
            flat: dto.flat,
            postalcode: dto.postalcode,
            city: dto.city,
            country: dto.country,
        }

        return venue
    }
}
