import { Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionConfig {}

export const CompetitionConfigSchema = SchemaFactory.createForClass(CompetitionConfig)
