import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Schemas
import { Venue } from '@/venue/schema/venue.schema'

export type TeamDocument = Team & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Team {
    _id: string

    @Prop({
        type: Types.ObjectId,
        ref: Venue.name,
    })
    venue: Types.ObjectId
}

export const TeamSchema = SchemaFactory.createForClass(Team)
