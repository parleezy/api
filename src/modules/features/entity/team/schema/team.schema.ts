import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Schemas
import { Venue } from '@/venue/schema/venue.schema'
import { TeamIdentity, TeamIdentitySchema } from './team-identity.schema'
import { TeamLocation, TeamLocationSchema } from './team-location.schema'

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

    @Prop({ _id: false, type: TeamIdentitySchema })
    identity: TeamIdentity

    @Prop({ _id: false, type: TeamLocationSchema })
    location: TeamLocation
}

export const TeamSchema = SchemaFactory.createForClass(Team)
