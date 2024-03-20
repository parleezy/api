import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Api
import { Api } from '@/data/types/api'

@Schema({
    _id: false,
})
export class TeamLocation {
    @Prop({
        type: String,
        enum: Object.values(Api.CountryType),
        required: true,
    })
    country: Api.CountryType

    @Prop({
        type: String,
        enum: Object.values(Api.SubRegionType),
        required: true,
    })
    subregion: Api.SubRegionType

    @Prop({
        type: String,
        enum: Object.values(Api.RegionType),
        required: true,
    })
    region: Api.RegionType
}

export const TeamLocationSchema = SchemaFactory.createForClass(TeamLocation)
