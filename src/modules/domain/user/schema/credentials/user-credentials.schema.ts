import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

import { UserEmailCredentials, UserEmailCredentialsSchema } from './user-email-credentials.schema'

@Schema()
export class UserCredentials {
    @Prop({ _id: false, type: UserEmailCredentialsSchema })
    email: UserEmailCredentials
}

export const UserCredentialsSchema = SchemaFactory.createForClass(UserCredentials)
