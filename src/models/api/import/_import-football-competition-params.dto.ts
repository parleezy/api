import { IsNotEmpty, IsNumber, IsString } from 'class-validator'

export class ImportFootballCompetitionParams {
    @IsString()
    @IsNotEmpty()
    league_id: string

    @IsNumber()
    @IsNotEmpty()
    api_id: number
}
