import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class AssociationCoordinates {
    @Prop()
    lat: number

    @Prop()
    lng: number
}

export const AssociationCoordinatesSchema = SchemaFactory.createForClass(AssociationCoordinates)
