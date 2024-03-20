import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionDates {
    @Prop({
        type: Date,
        default: true,
    })
    start: Date

    @Prop({
        type: Date,
        default: true,
    })
    end: Date
}

export const CompetitionDatesSchema = SchemaFactory.createForClass(CompetitionDates)
