import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class LeagueCreateParams {
    @IsBoolean()
    @IsNotEmpty()
    api_available: boolean

    @IsString()
    @IsOptional()
    api_host: string

    @IsNumber()
    @IsOptional()
    api_id: number

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    region: string

    @IsString()
    @IsNotEmpty()
    subregion: string

    @IsString()
    @IsNotEmpty()
    country: string
}
