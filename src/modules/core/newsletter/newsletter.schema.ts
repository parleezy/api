import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

export type NewsletterDocument = Newsletter & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Newsletter {
    _id: string

    @Prop({ isRequired: true, unique: true, trim: true, lowercase: true })
    email: string

    @Prop()
    date: Date
}

const NewsletterSchema = SchemaFactory.createForClass(Newsletter)

NewsletterSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { NewsletterSchema }
