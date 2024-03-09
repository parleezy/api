import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class PlayerPayments {
    @Prop()
    stripeid: string
}

export const PlayerPaymentsSchema = SchemaFactory.createForClass(PlayerPayments)
