import { Module } from '@nestjs/common'

// Competition
import { CompetitionController } from './competition.controller'

@Module({
    controllers: [CompetitionController],
})
export class CompetitionModule {}
