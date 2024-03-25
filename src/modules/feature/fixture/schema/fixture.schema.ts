import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Team
import { Team } from '@/team/schema/team.schema'
import { Venue } from '@/venue/schema/venue.schema'

export type FixtureDocument = Fixture & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Fixture {
    _id: string

    @Prop({
        type: Types.ObjectId,
        ref: Team.name,
        required: false,
    })
    home: Types.ObjectId

    @Prop({
        type: Types.ObjectId,
        ref: Team.name,
        required: false,
    })
    away: Types.ObjectId

    @Prop({
        type: Types.ObjectId,
        ref: Venue.name,
        required: false,
    })
    venue: Types.ObjectId
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
