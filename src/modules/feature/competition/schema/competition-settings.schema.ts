import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionSettings {
    @Prop({
        type: Boolean,
        required: true,
        default: false,
    })
    published: boolean

    @Prop({
        type: Boolean,
        required: true,
        default: false,
    })
    searchable: boolean
}

export const CompetitionSettingsSchema = SchemaFactory.createForClass(CompetitionSettings)
