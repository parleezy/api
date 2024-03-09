import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Tokens
import { PlayerJwtSchema, PlayerJwtToken } from './player-jwt-token.schema'
import { PlayerRecoverySchema, PlayerRecoveryToken } from './player-recovery-token.schema'
import { PlayerVerificationSchema, PlayerVerificationToken } from './player-verification-token.schema'

@Schema()
export class PlayerTokens {
    @Prop({ _id: false, type: PlayerJwtSchema })
    jwt: PlayerJwtToken

    @Prop({ _id: false, type: PlayerRecoverySchema })
    recovery: PlayerRecoveryToken

    @Prop({ _id: false, type: PlayerVerificationSchema })
    verification: PlayerVerificationToken
}

export const PlayerTokensSchema = SchemaFactory.createForClass(PlayerTokens)
