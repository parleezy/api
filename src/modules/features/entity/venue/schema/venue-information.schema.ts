import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Api
import { Api } from '@/data/types/api'

@Schema({
    _id: false,
})
export class VenueInformation {
    @Prop({
        type: Number,
    })
    capacity: number

    @Prop({
        type: [String],
        enum: Object.values(Api.SportType),
        required: true,
    })
    sports: Api.SportType[]
}

export const VenueInformationSchema = SchemaFactory.createForClass(VenueInformation)
