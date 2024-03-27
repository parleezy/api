import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class TeamCreateParams {
    @IsBoolean()
    @IsNotEmpty()
    api_available: boolean

    @IsString()
    @IsOptional()
    api_host: string

    @IsNumber()
    @IsOptional()
    api_id: number
}
