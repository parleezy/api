import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Leagues
import { League } from '@/league/schema/league.schema'

export type AssociationDocument = Association & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Association {
    _id: string

    @Prop({
        type: [Types.ObjectId],
        ref: League.name,
    })
    leagues: Types.ObjectId[]
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
