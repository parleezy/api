import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Api } from '@/models/api'
import { Types } from 'mongoose'

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

    @Prop({
        type: Types.ObjectId,
        required: true,
    })
    league: Types.ObjectId
}

export const CompetitionMetaSchema = SchemaFactory.createForClass(CompetitionMeta)
