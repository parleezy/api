import { Injectable } from '@nestjs/common'

// Competition
import { Competition } from './schema/competition.schema'

@Injectable()
export class CompetitionFactory {
    create(): Competition {
        return new Competition()
    }
}
