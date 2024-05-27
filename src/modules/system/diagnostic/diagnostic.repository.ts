import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { Diagnostic, DiagnosticDocument } from './schema/diagnostic.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

@Injectable()
export class DiagnosticRepository extends MongoRepository<DiagnosticDocument> {
    constructor(
        @InjectModel(Diagnostic.name, System.DatabaseName.INFRASTRUCTURE) diagnosticModel: Model<DiagnosticDocument>,
    ) {
        super(diagnosticModel)
    }
}
