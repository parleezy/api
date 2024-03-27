import { IsBoolean, IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'

export class CompetitionCreateParams {
    @IsString()
    @IsNotEmpty()
    league_id: string

    @IsString()
    @IsNotEmpty()
    competition_type: string

    @IsBoolean()
    @IsNotEmpty()
    api_available: boolean

    @IsString()
    @IsOptional()
    api_host: string

    @IsNumber()
    @IsOptional()
    api_id: number

    @IsString()
    @IsNotEmpty()
    region: string

    @IsString()
    @IsNotEmpty()
    subregion: string

    @IsString()
    @IsNotEmpty()
    country: string

    // Coverage
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

    // Dates
    @IsDate()
    @IsNotEmpty()
    date_start: Date

    @IsDate()
    @IsNotEmpty()
    date_end: Date
}
