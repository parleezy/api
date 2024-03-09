import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

// Data
import { Api } from '@/data/types/api'

@Schema()
export class PlayerCredentials {
    @Prop({ isRequired: true, unique: true, trim: true, lowercase: true })
    email: string

    @Prop({ isRequired: true })
    password: string

    @Prop({
        type: String,
        enum: Object.values(Api.RoleType),
        default: Api.RoleType.PLAYER,
    })
    role: Api.RoleType

    @Prop({ type: Boolean, default: false })
    verified: boolean
}

export const PlayerCredentialsSchema = SchemaFactory.createForClass(PlayerCredentials)
