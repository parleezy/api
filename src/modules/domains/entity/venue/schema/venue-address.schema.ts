import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { Api } from '@/data/types/api'

@Schema({
    _id: false,
})
export class VenueAddress {
    @Prop({
        type: String,
        required: true,
    })
    street: string

    @Prop({
        type: String,
        required: false,
    })
    flat: string

    @Prop({
        type: String,
        required: true,
    })
    postalcode: string

    @Prop({
        type: String,
        required: true,
    })
    city: string

    @Prop({
        type: String,
        enum: Object.values(Api.CountryType),
        required: true,
    })
    country: Api.CountryType

    @Prop({
        type: Number,
    })
    lat: number

    @Prop({
        type: Number,
    })
    lng: number
}

export const VenueAddressSchema = SchemaFactory.createForClass(VenueAddress)
