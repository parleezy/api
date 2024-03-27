import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { TeamApi, TeamApiSchema } from './team-api.schema'
import { TeamInfo, TeamInfoSchema } from './team-info.schema'
import { TeamMeta, TeamMetaSchema } from './team-meta.schema'
import { TeamSettings, TeamSettingsSchema } from './team-settings.schema'

export type TeamDocument = Team & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Team {
    _id: string

    @Prop({ _id: false, type: TeamApiSchema })
    api: TeamApi

    @Prop({ _id: false, type: TeamInfoSchema })
    info: TeamInfo

    @Prop({ _id: false, type: TeamMetaSchema })
    meta: TeamMeta

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
