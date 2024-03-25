import { Injectable } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Fixture
import { Fixture } from '@/fixture/schema/fixture.schema'
import { FixtureFactory } from '@/fixture/fixture.factory'
import { FixtureRepository } from '@/fixture/fixture.repository'

@Injectable()
export class FixtureService {
    constructor(
        private _fixtureFactory: FixtureFactory,
        private _fixtureRepository: FixtureRepository,
    ) {}

    create(dto: Api.FixtureCreateParams): Promise<Fixture> {
        return this._fixtureRepository.create(this._fixtureFactory.create(dto))
    }

    list(): Promise<Fixture[]> {
        return this._fixtureRepository.list()
    }

    retrieve(id: string): Promise<Fixture> {
        return this._fixtureRepository.retrieve(id)
    }
}
