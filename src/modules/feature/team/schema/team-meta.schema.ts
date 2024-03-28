import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Api } from '@/models/api'

@Schema({
    _id: false,
})
export class TeamMeta {
    @Prop({
        type: String,
        enum: [...Object.values(Api.RegionType)],
    })
    region: string

    @Prop({
        type: String,
        enum: [...Object.values(Api.SubRegionType)],
    })
    subregion: string

    @Prop({
        type: String,
        enum: [...Object.values(Api.CountryType)],
    })
    country: string

    @Prop({
        type: [String],
        default: [],
    })
    keywords: string[]
}

export const TeamMetaSchema = SchemaFactory.createForClass(TeamMeta)
