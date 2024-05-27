import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { System } from '@/models/system'

// Feature Toggle
import { Feature, FeatureSchema } from './schema/feature.schema'
import { FeatureController } from './controllers/feature.controller'
import { FeatureFactory } from './feature.factory'
import { FeatureService } from './services/feature.service'
import { FeatureRepository } from './feature.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: Feature.name, schema: FeatureSchema }], System.DatabaseName.DOMAIN)],
    controllers: [FeatureController],
    providers: [FeatureService, FeatureFactory, FeatureRepository],
    exports: [FeatureService],
})
export class FeatureModule {}
