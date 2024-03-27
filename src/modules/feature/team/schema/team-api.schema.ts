import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class TeamApi {
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
    id: number // API id
}

export const TeamApiSchema = SchemaFactory.createForClass(TeamApi)
