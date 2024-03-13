import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { SeasonDates, SeasonDatesSchema } from './season-dates.schema'
import { SeasonEvents, SeasonEventsSchema } from './season-events.schema'

export type SeasonDocument = Season & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Season {
    _id: string

    @Prop({ _id: false, type: SeasonDatesSchema })
    dates: SeasonDates

    @Prop({ _id: false, type: SeasonEventsSchema })
    events: SeasonEvents
}

export const SeasonSchema = SchemaFactory.createForClass(Season)
