import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type LeagueDocument = League & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class League {
    _id: string
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
