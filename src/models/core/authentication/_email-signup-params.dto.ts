import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class EmailSignupParams {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 64)
    password: string
}
