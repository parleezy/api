import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class LeagueHook {
    @Prop({
        type: Boolean,
        required: true,
    })
    available: boolean

    @Prop({
        type: String,
    })
    host: string

    @Prop({
        type: Number,
    })
    id: number
}

export const LeagueHookSchema = SchemaFactory.createForClass(LeagueHook)
