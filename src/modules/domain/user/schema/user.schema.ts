import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Credentials
import { UserCredentials, UserCredentialsSchema } from './credentials/user-credentials.schema'
import { UserTokens, UserTokensSchema } from './tokens/user-tokens.schema'

// Data

import { Core } from '@/models/core'

export type UserDocument = User & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class User {
    _id: string

    @Prop({
        type: String,
        enum: [...Object.values(Core.RoleType)],
        default: Core.RoleType.PLAYER,
    })
    role: Core.RoleType

    @Prop({
        type: Boolean,
        default: false,
    })
    verified: boolean

    @Prop({ _id: false, type: UserCredentialsSchema })
    credentials: UserCredentials

    @Prop({ _id: false, type: UserTokensSchema })
    tokens: UserTokens
}

const UserSchema = SchemaFactory.createForClass(User)

UserSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { UserSchema }
