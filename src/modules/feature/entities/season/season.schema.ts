import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type SeasonDocument = Season & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Season {
    _id: string
}

export const SeasonSchema = SchemaFactory.createForClass(Season)
