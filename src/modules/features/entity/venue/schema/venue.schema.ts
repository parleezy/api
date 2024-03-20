import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Api
import { Api } from '@/data/types/api'

// Schemas
import { VenueAddress, VenueAddressSchema } from './venue-address.schema'
import { VenueIdentity, VenueIdentitySchema } from './venue-identity.schema'
import { VenueInformation, VenueInformationSchema } from './venue-information.schema'
import { VenueSettings, VenueSettingsSchema } from './venue-settings.schema'

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

    @Prop({ _id: false, type: VenueIdentitySchema })
    identity: VenueIdentity

    @Prop({ _id: false, type: VenueInformationSchema })
    information: VenueInformation

    @Prop({ _id: false, type: VenueSettingsSchema })
    settings: VenueSettings
}

const VenueSchema = SchemaFactory.createForClass(Venue)

VenueSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { VenueSchema }
