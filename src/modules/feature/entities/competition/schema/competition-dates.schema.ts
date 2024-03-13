import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class CompetitionDates {
    @Prop({
        type: Number,
    })
    end: Date

    @Prop()
    start: Date
}

export const CompetitionDatesSchema = SchemaFactory.createForClass(CompetitionDates)
