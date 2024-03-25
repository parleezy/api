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

const TeamSchema = SchemaFactory.createForClass(Team)

TeamSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { TeamSchema }
