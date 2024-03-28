import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Types
import { Api } from '@/models/api'

// Schema
import { CompetitionConfig, CompetitionConfigSchema } from './competition-config.schema'
import { CompetitionCoverage, CompetitionCoverageSchema } from './competition-coverage/competition-coverage.schema'
import { CompetitionDates, CompetitionDatesSchema } from './competition-dates.schema'
import { CompetitionEntities, CompetitionEntitiesSchema } from './competition-entities.schema'
import { CompetitionHook, CompetitionHookSchema } from './competition-hook.schema'
import { CompetitionMeta, CompetitionMetaSchema } from './competition-meta.schema'
import { CompetitionParticipants, CompetitionParticipantsSchema } from './competition-participants.schema'
import { CompetitionSettings, CompetitionSettingsSchema } from './competition-settings.schema'
import { Venue } from '@/venue/schema/venue.schema'

export type CompetitionDocument = Competition & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Competition {
    _id: string

    @Prop({
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    })
    slug: string

    @Prop({
        type: String,
        enum: [...Object.values(Api.CompetitionStatusType)],
        default: Api.CompetitionStatusType.ANNOUNCED,
    })
    status: string

    @Prop({
        type: String,
        enum: [...Object.values(Api.CompetitionType)],
        default: Api.CompetitionType.LEAGUE,
    })
    type: string

    @Prop({
        type: [Types.ObjectId],
        ref: Venue.name,
    })
    venues: Types.ObjectId[]

    @Prop({ _id: false, type: CompetitionConfigSchema })
    config: CompetitionConfig

    @Prop({ _id: false, type: CompetitionCoverageSchema })
    coverage: CompetitionCoverage

    @Prop({ _id: false, type: CompetitionDatesSchema })
    dates: CompetitionDates

    @Prop({ _id: false, type: CompetitionEntitiesSchema })
    entities: CompetitionEntities

    @Prop({ _id: false, type: CompetitionHookSchema })
    hook: CompetitionHook

    @Prop({ _id: false, type: CompetitionMetaSchema })
    meta: CompetitionMeta

    @Prop({ _id: false, type: CompetitionParticipantsSchema })
    participants: CompetitionParticipants

    @Prop({ _id: false, type: CompetitionSettingsSchema })
    settings: CompetitionSettings
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
