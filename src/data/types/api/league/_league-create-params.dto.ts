import { IsNotEmpty, IsString, IsBoolean, IsOptional, IsNumber, IsArray } from 'class-validator'

export class LeagueCreateParams {
    @IsString()
    @IsNotEmpty()
    slug: string

    @IsString()
    @IsNotEmpty()
    sport: string

    // External
    @IsNumber()
    @IsOptional()
    externalid: number

    @IsNumber()
    @IsOptional()
    externalsource: string

    // Identity
    @IsString()
    abbreviation: string

    @IsString()
    description: string

    @IsNumber()
    founded: number

    @IsString()
    @IsOptional()
    logo: string

    @IsString()
    name: string

    @IsString()
    shortname: string

    @IsString()
    website: string

    // Location
    @IsString()
    @IsOptional()
    street: string

    @IsString()
    @IsOptional()
    street2: string

    @IsString()
    @IsOptional()
    city: string

    @IsString()
    @IsOptional()
    state: string

    @IsString()
    @IsOptional()
    postalcode: string

    @IsString()
    @IsOptional()
    country: string

    @IsString()
    @IsOptional()
    lat: number

    @IsString()
    @IsOptional()
    lng: number

    @IsArray()
    @IsOptional()
    regions: string[]

    @IsArray()
    @IsOptional()
    subregions: string[]

    @IsArray()
    @IsOptional()
    countries: string[]

    // Settings
    @IsBoolean()
    active: boolean

    @IsNumber()
    rating: number

    // Socials
    @IsString()
    @IsOptional()
    discord: string

    @IsString()
    @IsOptional()
    facebook: string

    @IsString()
    @IsOptional()
    instagram: string

    @IsString()
    @IsOptional()
    linkedin: string

    @IsString()
    @IsOptional()
    tiktok: string

    @IsString()
    @IsOptional()
    youtube: string

    @IsString()
    @IsOptional()
    x: string
}
