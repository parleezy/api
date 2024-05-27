import { IsString, IsNotEmpty } from 'class-validator'

export class EmailResetParams {
    @IsString()
    @IsNotEmpty()
    id: string

    @IsString()
    @IsNotEmpty()
    token: string

    @IsString()
    @IsNotEmpty()
    password: string
}
