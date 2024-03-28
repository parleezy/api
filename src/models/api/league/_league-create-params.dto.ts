import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class LeagueCreateParams {
    /**
     * GENERAL
     */
    @IsString()
    @IsNotEmpty()
    slug: string

    /**
     * HOOK
     * External Source
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
     * INFO
     */
    @IsString()
    @IsNotEmpty()
    name: string

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
    settings_initialised: boolean

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
