import { IsArray, IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CompetitionCreateParams {
    @IsString()
    @IsNotEmpty()
    league_id: string

    /**
     * GENERAL
     */
    @IsString()
    @IsNotEmpty()
    slug: string

    @IsString()
    @IsNotEmpty()
    competition_type: string

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
     * METADATA
     */
    @IsString()
    @IsNotEmpty()
    meta_country: string

    @IsArray()
    @IsOptional()
    meta_keywords: string[]

    @IsString()
    @IsNotEmpty()
    meta_region: string

    @IsString()
    @IsNotEmpty()
    meta_subregion: string

    /**
     * COVERAGE
     */
    @IsBoolean()
    @IsOptional()
    coverage_events: boolean

    @IsBoolean()
    @IsOptional()
    coverage_lineups: boolean

    @IsBoolean()
    @IsOptional()
    coverage_statistics_players: boolean

    @IsBoolean()
    @IsOptional()
    coverage_statistics_teams: boolean

    @IsBoolean()
    @IsOptional()
    coverage_predictions: boolean

    @IsBoolean()
    @IsOptional()
    coverage_odds: boolean

    @IsBoolean()
    @IsOptional()
    coverage_assists: boolean

    @IsBoolean()
    @IsOptional()
    coverage_cards: boolean

    @IsBoolean()
    @IsOptional()
    coverage_players: boolean

    @IsBoolean()
    @IsOptional()
    coverage_scorers: boolean

    @IsBoolean()
    @IsOptional()
    coverage_standings: boolean

    /**
     * DATES
     */
    @IsDate()
    @IsNotEmpty()
    date_start: Date

    @IsDate()
    @IsNotEmpty()
    date_end: Date

    /**
     * SETTINGS
     */
}
