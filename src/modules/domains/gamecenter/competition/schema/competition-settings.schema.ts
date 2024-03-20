import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionSettings {
    @Prop({
        type: Boolean,
        default: true,
    })
    active: boolean
}

export const CompetitionSettingsSchema = SchemaFactory.createForClass(CompetitionSettings)
