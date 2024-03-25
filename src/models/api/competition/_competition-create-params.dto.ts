import { IsNotEmpty, IsString } from 'class-validator'

export class CompetitionCreateParams {
    @IsString()
    @IsNotEmpty()
    entity_type: string

    @IsString()
    @IsNotEmpty()
    entity_id: string
}
