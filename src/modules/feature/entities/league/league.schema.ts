import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type LeagueDocument = League & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class League {
    _id: string
}

export const LeagueSchema = SchemaFactory.createForClass(League)
