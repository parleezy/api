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

export const AssociationSchema = SchemaFactory.createForClass(Association)
