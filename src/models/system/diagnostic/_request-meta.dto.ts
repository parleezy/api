import { IsString, IsOptional } from 'class-validator'

export class RequestMetaParams {
    @IsString()
    @IsOptional()
    ip: string

    @IsString()
    @IsOptional()
    browser: string

    @IsString()
    @IsOptional()
    version: string

    @IsString()
    @IsOptional()
    os: string

    @IsString()
    @IsOptional()
    platform: string

    @IsString()
    @IsOptional()
    source: string
}
