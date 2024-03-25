import { Injectable } from '@nestjs/common'

// Fixture
import { League } from './schema/league.schema'

// Api
import { Api } from '@/models/api'

@Injectable()
export class LeagueFactory {
    create(_: Api.LeagueCreateParams): League {
        return new League()
    }
}
