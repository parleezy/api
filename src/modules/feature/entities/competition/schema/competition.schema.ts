import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { CompetitionDates, CompetitionDatesSchema } from './competition-dates.schema'
import { CompetitionEvents, CompetitionEventsSchema } from './competition-events.schema'

export type CompetitionDocument = Competition & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Competition {
    _id: string

    @Prop({ _id: false, type: CompetitionDatesSchema })
    dates: CompetitionDates

    @Prop({ _id: false, type: CompetitionEventsSchema })
    events: CompetitionEvents
}

export const CompetitionSchema = SchemaFactory.createForClass(Competition)
