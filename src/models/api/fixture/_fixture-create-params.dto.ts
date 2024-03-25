import { IsOptional, IsString } from 'class-validator'

export class FixtureCreateParams {
    @IsString()
    @IsOptional()
    home: string

    @IsString()
    @IsOptional()
    away: string

    @IsString()
    @IsOptional()
    venue: string
}
