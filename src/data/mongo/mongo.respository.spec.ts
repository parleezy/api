import { Model } from 'mongoose'
import { MongoRepository } from './mongo.repository'

interface MyDocument extends Document {
    _id?: string
    name: string
}

describe('MongoRepository', () => {
    let modelMock: Model<MyDocument>
    let repository: MongoRepository<MyDocument>

    beforeEach(() => {
        modelMock = {
            create: jest.fn(),
            find: jest.fn().mockReturnValue({
                populate: jest.fn().mockReturnThis(),
                exec: jest.fn().mockResolvedValue([]),
            }),
            findById: jest.fn().mockReturnValue({
                populate: jest.fn().mockReturnThis(),
                exec: jest.fn().mockResolvedValue({ _id: 'testId', name: 'Found' }),
            }),
            findByIdAndDelete: jest.fn().mockReturnValue({
                exec: jest.fn().mockResolvedValue({ _id: 'testId', name: 'Deleted' }),
            }),
            findByIdAndUpdate: jest.fn().mockReturnValue({
                populate: jest.fn().mockResolvedValue(null),
                exec: jest.fn().mockResolvedValue({ _id: 'testId', name: 'Updated' }),
            }),
        } as Partial<Model<MyDocument>> as Model<MyDocument>

        repository = new MongoRepository<MyDocument>(modelMock, [])
    })

    it('should create a document', async () => {
        const testData = { name: 'Test Name' } as MyDocument
        ;(modelMock.create as jest.Mock).mockResolvedValue(testData)

        const result = await repository.create(testData)
        expect(modelMock.create).toHaveBeenCalledWith(testData)
        expect(result).toEqual(testData)
    })

    it('should delete a document by id', async () => {
        const testId = 'testId'
        const expectedDeletionResult = { value: { _id: testId, name: 'Deleted' }, ok: 1 }
        ;(modelMock.findByIdAndDelete(testId).exec as jest.Mock).mockResolvedValue(expectedDeletionResult.value)

        const result = await repository.delete(testId)
        expect(modelMock.findByIdAndDelete).toHaveBeenCalledWith(testId)

        // Ensure exec was called as part of the chain
        expect(modelMock.findByIdAndDelete(testId).exec).toHaveBeenCalled()
        expect(result).toEqual(expectedDeletionResult)
    })

    it('should list all documents', async () => {
        const documents: MyDocument[] = [{ name: 'Test 1' } as MyDocument, { name: 'Test 2' } as MyDocument]
        ;(modelMock.find().exec as jest.Mock).mockResolvedValue(documents)

        const result = await repository.list()

        expect(modelMock.find).toHaveBeenCalled()
        expect(result).toEqual(documents)
        expect(result.length).toEqual(documents.length)
    })
})
