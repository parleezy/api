import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// League
import { LeagueApi, LeagueApiSchema } from './league-api.schema'
import { LeagueIdentity, LeagueIdentitySchema } from './league-identity.schema'
import { LeagueAddress, LeagueAddressSchema } from './league-address.schema'
import { LeagueSettings, LeagueSettingsSchema } from './league-settings.schema'

import { Competition } from '@/modules/features/gamecenter/competition/schema/competition.schema'

export type LeagueDocument = League & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class League {
    _id: string

    @Prop({
        type: [Types.ObjectId],
        ref: Competition.name,
    })
    competitions: Types.ObjectId[]

    @Prop({ _id: false, type: LeagueAddressSchema })
    address: LeagueAddress

    @Prop({ _id: false, type: LeagueApiSchema })
    api: LeagueApi

    @Prop({ _id: false, type: LeagueIdentitySchema })
    identity: LeagueIdentity

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
