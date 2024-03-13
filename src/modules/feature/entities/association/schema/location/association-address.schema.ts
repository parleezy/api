import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { AssociationCoordinates, AssociationCoordinatesSchema } from './association-coordinates.schema'

@Schema()
export class AssociationAddress {
    @Prop()
    street: string

    @Prop()
    street2: string

    @Prop()
    city: string

    @Prop()
    state: string

    @Prop()
    postalcode: string

    @Prop()
    country: string

    @Prop({ _id: false, type: AssociationCoordinatesSchema })
    coordinates: AssociationCoordinates
}

export const AssociationAddressSchema = SchemaFactory.createForClass(AssociationAddress)
