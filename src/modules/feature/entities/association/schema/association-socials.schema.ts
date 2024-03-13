import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class AssociationSocials {
    @Prop()
    facebook: string

    @Prop()
    instagram: string

    @Prop()
    linkedin: string

    @Prop()
    twitter: string
}

export const AssociationSocialsSchema = SchemaFactory.createForClass(AssociationSocials)
