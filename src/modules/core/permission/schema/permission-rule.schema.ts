import { Types } from 'mongoose'
import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

// Model
import { Core } from '@/models/core'

@Schema()
export class PermissionRule {
    @Prop({ required: true, default: false, type: Boolean })
    enabled: boolean

    @Prop({
        type: String,
        enum: [...Object.values(Core.PermissionActionType)],
    })
    action: Core.PermissionActionType

    @Prop({
        type: String,
        enum: [...Object.values(Core.PermissionScopeType)],
    })
    scope: Core.PermissionScopeType

    @Prop({ type: Types.ObjectId, required: true })
    entities: Types.ObjectId

    @Prop({ required: true })
    type: string
}

export const PermissionRuleSchema = SchemaFactory.createForClass(PermissionRule)
