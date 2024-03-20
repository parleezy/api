import { IsNotEmpty, IsString } from 'class-validator'

// Api
import { Api } from '..'

export class CompetitionCreateParams {
    @IsString()
    @IsNotEmpty()
    type: Api.CompetitionType
}
