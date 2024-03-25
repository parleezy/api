import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// League
import { Fixture, FixtureSchema } from './schema/fixture.schema'
import { FixtureController } from './fixture.controller'
import { FixtureFactory } from './fixture.factory'
import { FixtureRepository } from './fixture.repository'
import { FixtureService } from './services/fixture.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Fixture.name, schema: FixtureSchema }])],
    controllers: [FixtureController],
    providers: [FixtureFactory, FixtureRepository, FixtureService],
    exports: [FixtureService],
})
export class FixtureModule {}
