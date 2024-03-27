import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class LeagueCreateParams {
    @IsBoolean()
    @IsNotEmpty()
    available: boolean

    @IsString()
    @IsOptional()
    host: string

    @IsNumber()
    @IsOptional()
    id: number

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
