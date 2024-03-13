import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { AssociationController } from './association.controller'

// Services
import { AssociationService } from './association.service'

// Association
import { Association, AssociationSchema } from './schema/association.schema'
import { AssociationRepository } from './association.repository'
import { AssociationFactory } from './association.factory'

@Module({
    imports: [MongooseModule.forFeature([{ name: Association.name, schema: AssociationSchema }])],
    controllers: [AssociationController],
    providers: [AssociationFactory, AssociationRepository, AssociationService],
    exports: [AssociationService],
})
export class AssociationModule {}
