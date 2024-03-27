import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Api } from '@/models/api'

@Schema({
    _id: false,
})
export class CompetitionMeta {
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
}

export const CompetitionMetaSchema = SchemaFactory.createForClass(CompetitionMeta)
