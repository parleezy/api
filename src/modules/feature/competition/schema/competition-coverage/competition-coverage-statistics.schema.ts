import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionCoverageStatistics {
    @Prop({
        type: Boolean,
        default: false,
    })
    assists: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    cards: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    players: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    scorers: boolean
}

export const CompetitionCoverageStatisticsSchema = SchemaFactory.createForClass(CompetitionCoverageStatistics)
