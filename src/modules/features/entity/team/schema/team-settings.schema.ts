import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class TeamSettings {
    @Prop({
        type: Boolean,
        default: true,
    })
    active: boolean
}

export const TeamSettingsSchema = SchemaFactory.createForClass(TeamSettings)
