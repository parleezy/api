import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class PlayerRecoveryToken {
    @Prop()
    token: string

    @Prop()
    expiry: number
}

export const PlayerRecoverySchema = SchemaFactory.createForClass(PlayerRecoveryToken)
