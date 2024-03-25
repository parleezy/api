import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Schemas
import { Competition } from '@/modules/feature/competition/schema/competition.schema'
import { LeagueApi, LeagueApiSchema } from './league-api.schema'
import { LeagueMeta, LeagueMetaSchema } from './league-meta.schema'
import { LeagueInfo, LeagueInfoSchema } from './league-info.schema'

export type LeagueDocument = League & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class League {
    _id: string

    @Prop({ _id: false, type: LeagueApiSchema })
    api: LeagueApi

    @Prop({
        type: [Types.ObjectId],
        ref: Competition.name,
    })
    competitions: Types.ObjectId[]

    @Prop({ _id: false, type: LeagueInfoSchema })
    info: LeagueInfo

    @Prop({ _id: false, type: LeagueMetaSchema })
    meta: LeagueMeta
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
