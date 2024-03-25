import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class LeagueCreateParams {
    @IsBoolean()
    @IsNotEmpty()
    available: boolean

    @IsString()
    @IsOptional()
    host: string

    @IsString()
    @IsOptional()
    id: string

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
