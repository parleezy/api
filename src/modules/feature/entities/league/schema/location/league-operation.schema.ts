import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Location
import { CountryEnum, RegionEnum } from '@/data/types/api/geography'
@Schema()
export class LeagueLocationOperation {
    @Prop({
        type: [String],
        enum: [...Object.values(RegionEnum)],
    })
    regions: string[]

    @Prop({
        type: [String],
        enum: [...Object.values(RegionEnum)],
    })
    subregions: string[]

    @Prop({
        type: [String],
        enum: [...Object.values(CountryEnum)],
    })
    countries: string[]
}

export const LeagueLocationOperationSchema = SchemaFactory.createForClass(LeagueLocationOperation)
