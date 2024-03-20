import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type AssociationDocument = Association & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Association {
    _id: string
}

const AssociationSchema = SchemaFactory.createForClass(Association)

AssociationSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { AssociationSchema }
