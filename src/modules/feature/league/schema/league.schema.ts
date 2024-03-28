import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Schemas
import { Competition } from '@/competition/schema/competition.schema'
import { LeagueHook, LeagueHookSchema } from './league-hook.schema'
import { LeagueMeta, LeagueMetaSchema } from './league-meta.schema'
import { LeagueInfo, LeagueInfoSchema } from './league-info.schema'
import { LeagueSettings, LeagueSettingsSchema } from './league-settings.schema'

export type LeagueDocument = League & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class League {
    _id: string

    @Prop({
        type: String,
        required: true,
        trim: true,
        lowercase: true,
    })
    slug: string

    @Prop({ _id: false, type: LeagueHookSchema })
    hook: LeagueHook

    @Prop({
        type: [Types.ObjectId],
        ref: Competition.name,
    })
    competitions: Types.ObjectId[]

    @Prop({ _id: false, type: LeagueInfoSchema })
    info: LeagueInfo

    @Prop({ _id: false, type: LeagueMetaSchema })
    meta: LeagueMeta

    @Prop({ _id: false, type: LeagueSettingsSchema })
    settings: LeagueSettings
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
