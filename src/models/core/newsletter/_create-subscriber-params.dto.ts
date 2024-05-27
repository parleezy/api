import { IsEmail, IsNotEmpty } from 'class-validator'

export class CreateSubscriberParams {
    @IsEmail()
    @IsNotEmpty()
    email: string
}
