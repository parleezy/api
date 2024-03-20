import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Schema
import { Association, AssociationSchema } from './schema/association.schema'
import { AssociationRepository } from './association.repository'
import { AssociationFactory } from './association.factory'
import { AssociationService } from './association.service'
import { AssociationController } from './association.controller'

@Module({
    imports: [MongooseModule.forFeature([{ name: Association.name, schema: AssociationSchema }])],
    controllers: [AssociationController],
    providers: [AssociationFactory, AssociationRepository, AssociationService],
    exports: [AssociationService],
})
export class AssociationModule {}
