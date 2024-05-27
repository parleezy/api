import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// User
import { User } from '@/domain/user/schema/user.schema'

export type PermissionDocument = Permission & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Permission {
    _id: string

    @Prop({
        type: Types.ObjectId,
        ref: User.name,
        default: [],
    })
    user: Types.ObjectId
}

const PermissionSchema = SchemaFactory.createForClass(Permission)

PermissionSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { PermissionSchema }
