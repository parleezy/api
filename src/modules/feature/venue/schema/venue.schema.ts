import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type VenueDocument = Venue & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Venue {
    _id: string
}

const VenueSchema = SchemaFactory.createForClass(Venue)

VenueSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { VenueSchema }
