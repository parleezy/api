import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class LeagueSettings {
    @Prop({
        type: Boolean,
        default: false,
    })
    active: boolean

    @Prop({
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5],
        default: 3,
    })
    rating: number
}

export const LeagueSettingsSchema = SchemaFactory.createForClass(LeagueSettings)
