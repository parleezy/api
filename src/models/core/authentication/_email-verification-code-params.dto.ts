import { IsNotEmpty, IsString } from 'class-validator'

export class EmailVerificationCodeParams {
    @IsString()
    @IsNotEmpty()
    code: string
}
