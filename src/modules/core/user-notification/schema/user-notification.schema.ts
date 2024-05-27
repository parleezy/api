import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// User
import { Player } from '@/domain/player/schema/player.schema'
import { Core } from '@/models/core'

export type UserNotificationDocument = UserNotification & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class UserNotification {
    _id: string

    @Prop({ type: String })
    title: string

    @Prop({ type: String })
    description: string

    @Prop({ type: String })
    action: string

    @Prop({ type: Boolean, default: false })
    read: boolean

    @Prop({
        type: Types.ObjectId,
        ref: Player.name,
    })
    recipient: Types.ObjectId

    @Prop({
        type: Types.ObjectId,
        ref: Player.name,
    })
    sender: Types.ObjectId

    @Prop({
        type: String,
        enum: [...Object.values(Core.UserNotificationType)],
    })
    type: Core.UserNotificationType
}

const UserNotificationSchema = SchemaFactory.createForClass(UserNotification)

UserNotificationSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { UserNotificationSchema }
