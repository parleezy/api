import { Injectable } from '@nestjs/common'

// Modules
import { Api } from '@/data/types/api'
import { Association } from './schema/association.schema'

@Injectable()
export class AssociationFactory {
    create(dto: Api.AssociationCreateParams): Association {
        const association = new Association()

        association.info = {
            abbreviation: dto.abbreviation,
            founded: dto.founded,
            logo: dto.logo,
            name: dto.name,
            website: dto.website,
        }

        association.location = {
            region: dto.region,
            subregion: dto.region,
            country: dto.region,
            address: {
                street: dto.street,
                street2: dto.street2,
                city: dto.city,
                state: dto.state,
                postalcode: dto.postalcode,
                country: dto.country,
                coordinates: {
                    lat: parseInt(dto.lat) || null,
                    lng: parseInt(dto.lng) || null,
                },
            },
        }

        association.socials = {
            facebook: dto.facebook,
            linkedin: dto.linkedin,
            instagram: dto.instagram,
            twitter: dto.twitter,
        }

        return association
    }
}
