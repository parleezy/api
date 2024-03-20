import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class TeamUpdateParams {
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
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    shortname: string

    @IsString()
    @IsOptional()
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
    @IsOptional()
    country: string

    @IsString()
    @IsOptional()
    region: string

    @IsString()
    @IsOptional()
    subregion: string

    // Settings
    @IsBoolean()
    @IsOptional()
    active: boolean
}
