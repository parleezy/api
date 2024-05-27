import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// User
import { User } from '@/domain/user/schema/user.schema'

export type PlayerDocument = Player & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Player {
    _id: string

    @Prop({
        type: Types.ObjectId,
        ref: User.name,
        default: [],
    })
    user: Types.ObjectId
}

const PlayerSchema = SchemaFactory.createForClass(Player)

PlayerSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { PlayerSchema }
