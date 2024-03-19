import { Injectable } from '@nestjs/common'

// Venue
import { Venue } from './schema/venue.schema'
import { VenueFactory } from './venue.factory'
import { VenueRepository } from './venue.repository'

// Types
import { Api } from '@/data/types/api'

@Injectable()
export class VenueService {
    constructor(
        private _venueFactory: VenueFactory,
        private _venueRepository: VenueRepository,
    ) {}

    async create(dto: Api.VenueCreateParams): Promise<Venue> {
        return await this._venueRepository.create(this._venueFactory.create(dto))
    }
}
