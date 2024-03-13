import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { AssociationAddressSchema, AssociationAddress } from './association-address.schema'

@Schema()
export class AssociationLocation {
    @Prop()
    region: string

    @Prop()
    subregion: string

    @Prop()
    country: string

    @Prop({ _id: false, type: AssociationAddressSchema })
    address: AssociationAddress
}

export const AssociationLocationSchema = SchemaFactory.createForClass(AssociationLocation)
