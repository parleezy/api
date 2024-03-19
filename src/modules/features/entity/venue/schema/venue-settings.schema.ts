import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class VenueSettings {
    @Prop({
        type: Boolean,
        default: true,
        required: true,
    })
    active: boolean
}

export const VenueSettingsSchema = SchemaFactory.createForClass(VenueSettings)
