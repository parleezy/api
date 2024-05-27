import { FilterQuery, ModifyResult, UpdateQuery } from 'mongoose'

export abstract class MongoRepositoryInterface<T> {
    abstract create(document: T): Promise<T>
    abstract delete(id: string): Promise<ModifyResult<T>>
    abstract findOne(query: FilterQuery<T>): Promise<T | null>
    abstract list(): Promise<T[]>
    abstract retrieve(id: string): Promise<T | null>
    abstract search(query: FilterQuery<T>): Promise<T[]>
    abstract update(id: string, update: UpdateQuery<T>): Promise<T>
    abstract updateMany(id: string[], update: UpdateQuery<T>): Promise<T[]>
}
