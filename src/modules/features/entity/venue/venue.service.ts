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

    /**
     * Internal
     */
    private async _retrieveById(id: string): Promise<Venue | null> {
        return await this._venueRepository.retrieve(id)
    }

    /**
     * Public
     */
    async create(dto: Api.VenueCreateParams): Promise<Venue> {
        return await this._venueRepository.create(this._venueFactory.create(dto))
    }

    async list(): Promise<Venue[]> {
        return await this._venueRepository.list()
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Venue | null> => this._retrieveById(id),
        }
    }
}
