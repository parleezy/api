import { Api } from '@/data/types/api'
import { VenueFactory } from './venue.factory'
import { Venue } from '../schema/venue.schema'

describe('VenueFactory', () => {
    let venueFactory: VenueFactory

    beforeEach(() => {
        venueFactory = new VenueFactory()
    })

    it('should correctly create a Venue object with all fields from DTO', () => {
        const dto: Api.VenueCreateParams = {
            type: 'ARENA',
            street: '123 Example St',
            flat: '2A',
            postalcode: 'ABC123',
            city: 'Exampleville',
            country: Api.CountryType.UNITED_STATES,
            lat: 45.678,
            lng: -123.456,
            name: 'Example Venue',
            nickname: 'The Example',
            former: ['Old Venue Name'],
            capacity: 10000,
            sports: ['BASKETBALL'],
            active: true,
        }

        const venue = venueFactory.create(dto)

        expect(venue.type).toEqual(dto.type)
        expect(venue.address.street).toEqual(dto.street)
        expect(venue.address.flat).toEqual(dto.flat)
        expect(venue.address.postalcode).toEqual(dto.postalcode)
        expect(venue.address.city).toEqual(dto.city)
        expect(venue.address.country).toEqual(dto.country)
        expect(venue.address.lat).toEqual(dto.lat)
        expect(venue.address.lng).toEqual(dto.lng)
        expect(venue.identity.name).toEqual(dto.name)
        expect(venue.identity.nickname).toEqual(dto.nickname)
        expect(venue.identity.former).toEqual(dto.former)
        expect(venue.information.capacity).toEqual(dto.capacity)
        expect(venue.information.sports).toEqual(dto.sports)
        expect(venue.settings.active).toEqual(dto.active)
    })

    it('should update a Venue object using update params, leaving unspecified fields unchanged', () => {
        const initialVenue = new Venue()

        const dto = {
            city: 'New Exampleville',
            capacity: 12000,
        } as Api.VenueUpdateParams

        const updatedVenue = venueFactory.update(initialVenue, dto)

        expect(updatedVenue.address.city).toEqual(dto.city)
        expect(updatedVenue.information.capacity).toEqual(dto.capacity)

        expect(updatedVenue.type).toEqual(initialVenue.type)
    })
})
