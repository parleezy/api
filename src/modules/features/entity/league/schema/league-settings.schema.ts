import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class LeagueSettings {
    @Prop({
        type: Boolean,
        default: true,
    })
    active: boolean
}

export const LeagueSettingsSchema = SchemaFactory.createForClass(LeagueSettings)
