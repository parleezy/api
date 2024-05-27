import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator'

export class EmailLoginParams {
    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 64)
    password: string
}
