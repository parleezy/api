import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Api
import { Api } from '@/data/types/api'
import { VenueAddress, VenueAddressSchema } from './venue-address.schema'

export type VenueDocument = Venue & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Venue {
    _id: string

    @Prop({
        type: String,
        enum: Object.values(Api.VenueType),
        default: Api.VenueType.ARENA,
        required: true,
    })
    type: Api.VenueType

    @Prop({ _id: false, type: VenueAddressSchema })
    address: VenueAddress
}

export const VenueSchema = SchemaFactory.createForClass(Venue)
