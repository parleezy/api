import { Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionApi {}

export const CompetitionApiSchema = SchemaFactory.createForClass(CompetitionApi)
