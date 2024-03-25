import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type FixtureDocument = Fixture & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Fixture {
    _id: string
}

const FixtureSchema = SchemaFactory.createForClass(Fixture)

FixtureSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { FixtureSchema }
