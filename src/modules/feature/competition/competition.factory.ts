import { Injectable } from '@nestjs/common'

// Competition
import { Competition } from './competition.schema'

@Injectable()
export class CompetitionFactory {
    create(): Competition {
        return new Competition()
    }
}
