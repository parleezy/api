import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Credentials
import { PlayerCredentials, PlayerCredentialsSchema } from './player-credentials.schema'
import { PlayerPayments, PlayerPaymentsSchema } from './player-payments.schema'
import { PlayerTokens, PlayerTokensSchema } from './tokens/player-tokens.schema'

export type PlayerDocument = Player & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Player {
    _id: string

    @Prop({ _id: false, type: PlayerCredentialsSchema })
    credentials: PlayerCredentials

    @Prop({ _id: false, type: PlayerPaymentsSchema })
    payments: PlayerPayments

    @Prop({ _id: false, type: PlayerTokensSchema })
    tokens: PlayerTokens
}

export const PlayerSchema = SchemaFactory.createForClass(Player)
