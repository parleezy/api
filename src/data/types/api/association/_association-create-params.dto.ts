import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

export class AssociationCreateParams {
    @IsString()
    @IsOptional()
    abbreviation: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    founded: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    website: string

    @IsString()
    @IsOptional()
    logo: string

    @IsString()
    @IsOptional()
    region: string

    @IsString()
    @IsOptional()
    subregion: string

    @IsString()
    @IsOptional()
    country: string

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
    lat: string

    @IsString()
    @IsOptional()
    lng: string

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
    twitter: string
}
