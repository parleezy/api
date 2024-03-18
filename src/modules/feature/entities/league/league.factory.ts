import { Injectable } from '@nestjs/common'

// Modules
import { Api } from '@/data/types/api'

// Schema
import { League } from './schema/league.schema'

@Injectable()
export class LeagueFactory {
    create(dto: Api.LeagueCreateParams): League {
        const league = new League()

        league.slug = dto.slug
        league.sport = dto.sport

        league.external = {
            id: dto.externalid,
            source: dto.externalsource,
        }

        league.identity = {
            abbreviation: dto.abbreviation,
            description: dto.description,
            founded: dto.founded,
            logo: dto.logo,
            name: dto.name,
            shortname: dto.shortname,
            website: dto.website,
        }

        league.location = {
            hq: {
                street: dto.street,
                street2: dto.street2,
                city: dto.city,
                state: dto.state,
                postalcode: dto.postalcode,
                country: dto.country,
                lat: dto.lat,
                lng: dto.lng,
            },
            operation: {
                regions: dto.regions,
                subregions: dto.subregions,
                countries: dto.countries,
            },
        }

        league.settings = {
            active: dto.active,
            rating: dto.rating,
        }

        league.socials = {
            discord: dto.discord,
            facebook: dto.facebook,
            instagram: dto.instagram,
            linkedin: dto.linkedin,
            tiktok: dto.tiktok,
            youtube: dto.youtube,
            x: dto.x,
        }

        return league
    }
}
