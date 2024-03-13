import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class AssociationInfo {
    @Prop()
    abbreviation: string

    @Prop()
    founded: string

    @Prop()
    logo: string

    @Prop()
    name: string

    @Prop()
    website: string
}

export const AssociationInfoSchema = SchemaFactory.createForClass(AssociationInfo)
