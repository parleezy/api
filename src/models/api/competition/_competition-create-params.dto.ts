import { IsNotEmpty, IsString } from 'class-validator'

export class CompetitionCreateParams {
    @IsString()
    @IsNotEmpty()
    league_id: string
}
