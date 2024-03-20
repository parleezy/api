import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionConfig {
    @Prop({
        type: Boolean,
        default: true,
    })
    default_venues: boolean
}

export const CompetitionConfigSchema = SchemaFactory.createForClass(CompetitionConfig)
