import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { Types } from 'mongoose'

import { User } from '@/domain/user/schema/user.schema'

@Schema()
export class ActivityUser {
    @Prop({
        type: Types.ObjectId,
        ref: User.name,
        default: [],
    })
    id: Types.ObjectId
}

export const ActivityUserSchema = SchemaFactory.createForClass(ActivityUser)
