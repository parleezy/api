import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class TeamCreateParams {
    @IsString()
    @IsOptional()
    venue: string

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
}
