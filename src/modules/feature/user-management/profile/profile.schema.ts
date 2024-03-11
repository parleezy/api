import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Modules
import { Player } from '@/modules/feature/user-management/player/schema/player.schema'

export type ProfileDocument = Profile & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Profile {
    _id: string

    @Prop({
        type: Types.ObjectId,
        ref: Player.name,
    })
    player: Types.ObjectId
}

export const ProfileSchema = SchemaFactory.createForClass(Profile)
