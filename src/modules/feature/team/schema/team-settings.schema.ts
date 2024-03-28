import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class TeamSettings {
    @Prop({
        type: Boolean,
        default: true,
    })
    published: boolean

    @Prop({
        type: Boolean,
        default: true,
    })
    sanitized: boolean

    @Prop({
        type: Boolean,
        default: true,
    })
    searchable: boolean
}

export const TeamSettingsSchema = SchemaFactory.createForClass(TeamSettings)
