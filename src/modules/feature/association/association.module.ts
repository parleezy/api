import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Association
import { Association, AssociationSchema } from './schema/association.schema'
import { AssociationController } from './association.controller'
import { AssociationFactory } from './association.factory'
import { AssociationListenerService } from './services/association-listener.service'
import { AssociationRepository } from './association.repository'
import { AssociationService } from './services/association.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Association.name, schema: AssociationSchema }])],
    controllers: [AssociationController],
    providers: [AssociationFactory, AssociationListenerService, AssociationRepository, AssociationService],
    exports: [AssociationService],
})
export class AssociationModule {}
