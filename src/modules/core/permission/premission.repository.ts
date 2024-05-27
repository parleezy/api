import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

// League
import { Permission, PermissionDocument } from './schema/permission.schema'

// Generic Repo
import { MongoRepository } from '@/providers/mongo/mongo.repository'

// Data
import { System } from '@/models/system'

@Injectable()
export class PermissionRepository extends MongoRepository<PermissionDocument> {
    constructor(@InjectModel(Permission.name, System.DatabaseName.DOMAIN) permissionModel: Model<PermissionDocument>) {
        super(permissionModel)
    }
}
