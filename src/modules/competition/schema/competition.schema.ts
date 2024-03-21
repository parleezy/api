import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { CompetitionDates, CompetitionDatesSchema } from './competition-dates.schema'

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
}

const CompetitionSchema = SchemaFactory.createForClass(Competition)

CompetitionSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { CompetitionSchema }
