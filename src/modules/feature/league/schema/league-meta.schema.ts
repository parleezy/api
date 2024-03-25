import { Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class LeagueMeta {}

export const LeagueMetaSchema = SchemaFactory.createForClass(LeagueMeta)
