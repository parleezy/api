import { IsOptional, IsString } from 'class-validator'

// Api
import { Api } from '..'

export class CompetitionUpdateParams {
    @IsString()
    @IsOptional()
    type: Api.CompetitionType
}
