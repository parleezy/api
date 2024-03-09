import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class PlayerVerificationToken {
    @Prop()
    numeric: number

    @Prop()
    token: string

    @Prop()
    expiry: number
}

export const PlayerVerificationSchema = SchemaFactory.createForClass(PlayerVerificationToken)
