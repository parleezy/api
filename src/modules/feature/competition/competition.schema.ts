import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type CompetitionDocument = Competition & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Competition {
    _id: string
}

const CompetitionSchema = SchemaFactory.createForClass(Competition)

CompetitionSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { CompetitionSchema }
