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

export const VenueSchema = SchemaFactory.createForClass(Venue)
