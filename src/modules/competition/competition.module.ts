import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Competition
import { Competition, CompetitionSchema } from './schema/competition.schema'
import { CompetitionController } from './competition.controller'
import { CompetitionFactory } from './competition.factory'
import { CompetitionRepository } from './competition.repository'
import { CompetitionService } from './services/competition.service'

// Module
import { SportsDataModule } from '@/sports-data/sports-data.module'

@Module({
    imports: [MongooseModule.forFeature([{ name: Competition.name, schema: CompetitionSchema }]), SportsDataModule],
    controllers: [CompetitionController],
    providers: [CompetitionFactory, CompetitionRepository, CompetitionService],
    exports: [CompetitionService],
})
export class CompetitionModule {}
