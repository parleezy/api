import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class TeamCreateParams {
    /**
     * INFO
     */
    @IsString()
    @IsNotEmpty()
    info_name: string

    @IsString()
    @IsNotEmpty()
    info_shortname: string

    @IsString()
    @IsNotEmpty()
    info_code: string

    @IsString()
    @IsNotEmpty()
    info_country: string

    @IsNumber()
    @IsOptional()
    info_founded: number

    /**
     * HOOK
     */
    @IsBoolean()
    @IsNotEmpty()
    hook_available: boolean

    @IsString()
    @IsOptional()
    hook_host: string

    @IsNumber()
    @IsOptional()
    hook_id: number

    /**
     * META
     */
    @IsString()
    @IsNotEmpty()
    meta_region: string

    @IsString()
    @IsNotEmpty()
    meta_subregion: string

    @IsString()
    @IsNotEmpty()
    meta_country: string

    @IsArray()
    @IsOptional()
    meta_keywords: string[]

    /**
     * SETTINGS
     */
    @IsBoolean()
    @IsOptional()
    settings_published: boolean

    @IsBoolean()
    @IsOptional()
    settings_sanitized: boolean

    @IsBoolean()
    @IsOptional()
    settings_searchable: boolean
}
