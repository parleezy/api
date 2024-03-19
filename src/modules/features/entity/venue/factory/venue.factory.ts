import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/data/types/api'

// Schemas
import { Venue } from '../schema/venue.schema'
import { VenueAddressSchema } from '../schema/venue-address.schema'
import { VenueInformationSchema } from '../schema/venue-information.schema'
import { VenueIdentitySchema } from '../schema/venue-identity.schema'
import { VenueSettingsSchema } from '../schema/venue-settings.schema'

@Injectable()
export class VenueFactory {
    create(dto: Api.VenueCreateParams): Venue {
        return this.assignProperties(new Venue(), dto)
    }

    update(venue: Venue, dto: Api.VenueUpdateParams): Venue {
        return this.assignProperties(venue, dto)
    }

    private assignProperties(venue: Venue, dto: Api.VenueCreateParams | Api.VenueUpdateParams): Venue {
        venue.type = dto.type || venue.type

        venue.address = {
            ...venue.address,
            ...this.filterProperties(dto, Object.keys(VenueAddressSchema.paths)),
        }

        venue.identity = {
            ...venue.identity,
            ...this.filterProperties(dto, Object.keys(VenueIdentitySchema.paths)),
        }

        venue.information = {
            ...venue.information,
            ...this.filterProperties(dto, Object.keys(VenueInformationSchema.paths)),
        }

        venue.settings = {
            ...venue.settings,
            ...this.filterProperties(dto, Object.keys(VenueSettingsSchema.paths)),
        }

        return venue
    }

    private filterProperties(dto: Api.VenueCreateParams | Api.VenueUpdateParams, properties: string[]): Partial<Venue> {
        return properties.reduce((acc, prop) => {
            if (dto[prop] !== undefined) {
                acc[prop] = dto[prop]
            }
            return acc
        }, {})
    }
}
