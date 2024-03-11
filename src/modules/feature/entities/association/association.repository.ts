import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// Association
import { Association, AssociationDocument } from './association.schema'

// Generic Repo
import { MongoRepository } from '@/data/mongo/mongo.repository'

@Injectable()
export class AssociationRepository extends MongoRepository<AssociationDocument> {
    constructor(@InjectModel(Association.name) associationModel: Model<AssociationDocument>) {
        super(associationModel)
    }
}
