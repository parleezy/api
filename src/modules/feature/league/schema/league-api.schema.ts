import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class LeagueApi {
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

export const LeagueApiSchema = SchemaFactory.createForClass(LeagueApi)
