import { IsEmail, IsNotEmpty } from 'class-validator'

export class EmailRecoveryParams {
    @IsEmail()
    @IsNotEmpty()
    email: string
}
