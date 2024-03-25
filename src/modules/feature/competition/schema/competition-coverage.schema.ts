import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { CompetitionCoverageFixturesSchema, CompetitionCoverageFixtures } from './competition-coverage-fixtures.schema'
import { CompetitionCoverageMarketsSchema, CompetitionCoverageMarkets } from './competition-coverage-markets.schema'
import {
    CompetitionCoverageStatistics,
    CompetitionCoverageStatisticsSchema,
} from './competition-coverage-statistics.schema'
import { CompetitionCoverageTable, CompetitionCoverageTableSchema } from './competition-coverage-table.schema'

@Schema({
    _id: false,
})
export class CompetitionCoverage {
    @Prop({ _id: false, type: CompetitionCoverageFixturesSchema })
    fixtures: CompetitionCoverageFixtures

    @Prop({ _id: false, type: CompetitionCoverageMarketsSchema })
    markets: CompetitionCoverageMarkets

    @Prop({ _id: false, type: CompetitionCoverageStatisticsSchema })
    statistics: CompetitionCoverageStatistics

    @Prop({ _id: false, type: CompetitionCoverageTableSchema })
    table: CompetitionCoverageTable
}

export const CompetitionCoverageSchema = SchemaFactory.createForClass(CompetitionCoverage)
