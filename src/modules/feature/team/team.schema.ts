import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type TeamDocument = Team & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Team {
    _id: string
}

export const TeamSchema = SchemaFactory.createForClass(Team)
