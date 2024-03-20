import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Schemas
import { Venue } from '@/venue/schema/venue.schema'
import { TeamApi, TeamApiSchema } from './team-api.schema'
import { TeamColor, TeamColorSchema } from './team-color.schema'
import { TeamIdentity, TeamIdentitySchema } from './team-identity.schema'
import { TeamLocation, TeamLocationSchema } from './team-location.schema'
import { TeamSettings, TeamSettingsSchema } from './team-settings.schema'

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

    @Prop({ _id: false, type: TeamApiSchema })
    api: TeamApi

    @Prop({ _id: false, type: TeamColorSchema })
    color: TeamColor

    @Prop({ _id: false, type: TeamIdentitySchema })
    identity: TeamIdentity

    @Prop({ _id: false, type: TeamLocationSchema })
    location: TeamLocation

    @Prop({ _id: false, type: TeamSettingsSchema })
    settings: TeamSettings
}

const TeamSchema = SchemaFactory.createForClass(Team)

TeamSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { TeamSchema }
