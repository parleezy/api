import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class UserVerification {
    @Prop({ type: Boolean, default: false })
    verified: boolean

    @Prop({ type: Number })
    code: number

    @Prop({ type: String })
    token: string

    @Prop({ type: Date })
    expiry: Date

    @Prop({ type: Date })
    message_sent: Date
}

export const UserVerificationSchema = SchemaFactory.createForClass(UserVerification)
