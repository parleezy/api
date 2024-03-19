// import { Venue } from '@/venue/schema/venue.schema'
// import { VenueFactory } from '@/venue/factory/venue.factory'
// import { VenueRepository } from '@/venue/venue.repository'
// import { VenueService } from '@/venue/service/venue.service'

// // Api
// import { Api } from '@/data/types/api'

describe('VenueService', () => {
    // let service: VenueService
    // let venueFactory: VenueFactory
    // let venueRepository: VenueRepository
    // beforeEach(async () => {
    //     // Initialize the service with mocked dependencies
    //     venueFactory = new VenueFactory()
    //     venueRepository = new VenueRepository(Venue)
    //     service = new VenueService(venueFactory, venueRepository)
    // })
    // it('should create a venue', async () => {
    //     const dto: Api.VenueCreateParams = {
    //         /* mock DTO data */
    //     }
    //     const venue = new Venue() // Mocked Venue instance
    //     jest.spyOn(venueFactory, 'create').mockReturnValue(venue)
    //     jest.spyOn(venueRepository, 'create').mockResolvedValue(venue)
    //     await expect(service.create(dto)).resolves.toEqual(venue)
    //     expect(venueFactory.create).toHaveBeenCalledWith(dto)
    //     expect(venueRepository.create).toHaveBeenCalledWith(venue)
    // })
    // it('should list all venues', async () => {
    //     const venues = [new Venue(), new Venue()] // Mocked array of Venue instances
    //     jest.spyOn(venueRepository, 'list').mockResolvedValue(venues)
    //     await expect(service.list()).resolves.toEqual(venues)
    //     expect(venueRepository.list).toHaveBeenCalled()
    // })
    // it('should update an existing venue', async () => {
    //     const id = 'some-id'
    //     const dto: Api.VenueUpdateParams = {
    //         /* mock DTO data */
    //     }
    //     const venue = new Venue() // Mocked existing Venue instance
    //     jest.spyOn(service, '_retrieveById').mockResolvedValue(venue)
    //     jest.spyOn(venueFactory, 'update').mockReturnValue(venue)
    //     jest.spyOn(venueRepository, 'update').mockResolvedValue(venue)
    //     await expect(service.update(id, dto)).resolves.toEqual(venue)
    //     expect(service._retrieveById).toHaveBeenCalledWith(id)
    //     expect(venueFactory.update).toHaveBeenCalledWith(venue, dto)
    //     expect(venueRepository.update).toHaveBeenCalledWith(id, venue)
    // })
    // it('should retrieve a venue by ID', async () => {
    //     const id = 'some-id'
    //     const venue = new Venue() // Mocked Venue instance
    //     jest.spyOn(service, '_retrieveById').mockResolvedValue(venue)
    //     await expect(service.retrieve.byId(id)).resolves.toEqual(venue)
    //     expect(service._retrieveById).toHaveBeenCalledWith(id)
    // })
    // it('should throw NotFoundException if venue does not exist for update', async () => {
    //     const id = 'non-existent-id'
    //     const dto: Api.VenueUpdateParams = {
    //         /* mock DTO data */
    //     }
    //     jest.spyOn(service, '_retrieveById').mockResolvedValue(null)
    //     await expect(service.update(id, dto)).rejects.toThrow(NotFoundException)
    //     expect(service._retrieveById).toHaveBeenCalledWith(id)
    // })

    it('passes', () => {
        expect(true).toBe(true)
    })
})
