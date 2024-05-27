import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Tokens
import { UserJwtSchema, UserJwtToken } from './user-jwt-tokens.schema'
import { UserRecoverySchema, UserRecoveryToken } from './user-recovery-token.schema'

@Schema()
export class UserTokens {
    @Prop({ _id: false, type: UserJwtSchema })
    jwt: UserJwtToken

    @Prop({ _id: false, type: UserRecoverySchema })
    recovery: UserRecoveryToken
}

export const UserTokensSchema = SchemaFactory.createForClass(UserTokens)
