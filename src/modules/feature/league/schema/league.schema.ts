import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Competitions
import { Competition } from '@/competition/competition.schema'

export type LeagueDocument = League & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class League {
    _id: string

    @Prop({
        type: [Types.ObjectId],
        ref: Competition.name,
    })
    competitions: Types.ObjectId[]
}

const LeagueSchema = SchemaFactory.createForClass(League)

LeagueSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { LeagueSchema }
