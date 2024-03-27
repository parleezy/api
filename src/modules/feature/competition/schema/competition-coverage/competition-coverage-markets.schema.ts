import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionCoverageMarkets {
    @Prop({
        type: Boolean,
        default: false,
    })
    predictions: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    odds: boolean
}

export const CompetitionCoverageMarketsSchema = SchemaFactory.createForClass(CompetitionCoverageMarkets)
