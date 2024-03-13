import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class AssociationSettings {
    @Prop()
    abbreviation: string

    @Prop()
    founded: string
}

export const AssociationSettingsSchema = SchemaFactory.createForClass(AssociationSettings)
