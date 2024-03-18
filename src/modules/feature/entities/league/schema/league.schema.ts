import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { LeagueExternal, LeagueExternalSchema } from './league-external.schema'
import { LeagueIdentity, LeagueIdentitySchema } from './league-identity.schema'
import { LeagueLocation, LeagueLocationSchema } from './location/league-location.schema'
import { LeagueSettings, LeagueSettingsSchema } from './league-settings.schema'
import { LeagueSocials, LeagueSocialsSchema } from './league-socials.schema'

// Types
import { Api } from '@/data/types/api'

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
        unique: true,
        trim: true,
        lowercase: true,
    })
    slug: string

    @Prop({
        type: String,
        enum: Object.values(Api.SportType),
        default: Api.SportType.ICE_HOCKEY,
    })
    sport: Api.SportType

    @Prop({ _id: false, type: LeagueExternalSchema })
    external: LeagueExternal

    @Prop({ _id: false, type: LeagueIdentitySchema })
    identity: LeagueIdentity

    @Prop({ _id: false, type: LeagueLocationSchema })
    location: LeagueLocation

    @Prop({ _id: false, type: LeagueSettingsSchema })
    settings: LeagueSettings

    @Prop({ _id: false, type: LeagueSocialsSchema })
    socials: LeagueSocials
}

export const LeagueSchema = SchemaFactory.createForClass(League)

/**
 * Members
 * Competitions
 */
