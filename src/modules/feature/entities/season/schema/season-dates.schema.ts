import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class SeasonDates {
    @Prop({
        type: Number,
    })
    end: Date

    @Prop()
    start: Date
}

export const SeasonDatesSchema = SchemaFactory.createForClass(SeasonDates)
