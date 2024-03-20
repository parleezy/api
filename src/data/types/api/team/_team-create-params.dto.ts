import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class TeamCreateParams {
    @IsString()
    @IsOptional()
    venue: string

    // Api
    @IsString()
    @IsOptional()
    source: string

    @IsNumber()
    @IsOptional()
    sourceid: string

    // Color
    @IsString()
    @IsOptional()
    primary: string

    @IsString()
    @IsOptional()
    secondary: string

    @IsString()
    @IsOptional()
    tertiary: string

    // Identity
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    shortname: string

    @IsString()
    @IsNotEmpty()
    abbreviation: string

    @IsString()
    @IsOptional()
    logo: string

    @IsNumber()
    @IsOptional()
    founded: number

    @IsString()
    @IsOptional()
    description: string

    // Location
    @IsString()
    @IsNotEmpty()
    country: string

    @IsString()
    @IsNotEmpty()
    region: string

    @IsString()
    @IsNotEmpty()
    subregion: string

    // Settings
    @IsBoolean()
    @IsOptional()
    active: boolean
}
