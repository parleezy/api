import { IsNotEmpty, IsString } from 'class-validator'

export class EmailVerificationLinkParams {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    token: string
}
