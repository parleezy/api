import { Injectable } from '@nestjs/common'
import { Types } from 'mongoose'

// Fixture
import { Fixture } from './schema/fixture.schema'

// Api
import { Api } from '@/models/api'

@Injectable()
export class FixtureFactory {
    create(dto: Api.FixtureCreateParams): Fixture {
        const fixture = new Fixture()

        fixture.home = dto.home as unknown as Types.ObjectId
        fixture.away = dto.away as unknown as Types.ObjectId
        fixture.venue = dto.venue as unknown as Types.ObjectId

        return fixture
    }
}
