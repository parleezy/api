import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Competition
import { Competition, CompetitionSchema } from './competition.schema'
import { CompetitionController } from './competition.controller'
import { CompetitionRepository } from './competition.repository'
import { CompetitionService } from './competition.service'

@Module({
    imports: [MongooseModule.forFeature([{ name: Competition.name, schema: CompetitionSchema }])],
    controllers: [CompetitionController],
    providers: [CompetitionRepository, CompetitionService],
    exports: [CompetitionService],
})
export class CompetitionModule {}
