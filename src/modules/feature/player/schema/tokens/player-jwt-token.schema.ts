import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class PlayerJwtToken {
    @Prop()
    refresh: string
}

export const PlayerJwtSchema = SchemaFactory.createForClass(PlayerJwtToken)
