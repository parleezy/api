import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionHook {
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

export const CompetitionHookSchema = SchemaFactory.createForClass(CompetitionHook)
