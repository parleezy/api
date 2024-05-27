import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { UserVerification, UserVerificationSchema } from './verification.schema'

@Schema()
export class UserEmailCredentials {
    @Prop({ isRequired: true, unique: true, trim: true, lowercase: true })
    email: string

    @Prop({ isRequired: true })
    password: string

    @Prop({ _id: false, type: UserVerificationSchema })
    verification: UserVerification
}

export const UserEmailCredentialsSchema = SchemaFactory.createForClass(UserEmailCredentials)
