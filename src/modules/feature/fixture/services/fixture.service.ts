import { Injectable } from '@nestjs/common'

// Fixture
import { Fixture } from '@/fixture/schema/fixture.schema'
import { FixtureRepository } from '@/fixture/fixture.repository'

@Injectable()
export class FixtureService {
    constructor(private _fixtureRepository: FixtureRepository) {}

    create(): Promise<Fixture> {
        return this._fixtureRepository.create({})
    }

    list(): Promise<Fixture[]> {
        return this._fixtureRepository.list()
    }

    retrieve(id: string): Promise<Fixture> {
        return this._fixtureRepository.retrieve(id)
    }
}
