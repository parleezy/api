import { Injectable } from '@nestjs/common'

// League
import { Venue } from '@/venue/schema/venue.schema'
import { VenueRepository } from '@/venue/venue.repository'

@Injectable()
export class VenueService {
    constructor(private _venueRepository: VenueRepository) {}

    create(): Promise<Venue> {
        return this._venueRepository.create({})
    }

    list(): Promise<Venue[]> {
        return this._venueRepository.list()
    }

    retrieve(id: string): Promise<Venue> {
        return this._venueRepository.retrieve(id)
    }
}
