import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { CompetitionController } from './competition.controller'

// Services
import { CompetitionService } from './competition.service'

// Competition
import { Competition, CompetitionSchema } from './schema/competition.schema'
import { CompetitionRepository } from './competition.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: Competition.name, schema: CompetitionSchema }])],
    controllers: [CompetitionController],
    providers: [CompetitionRepository, CompetitionService],
    exports: [CompetitionService],
})
export class CompetitionModule {}
