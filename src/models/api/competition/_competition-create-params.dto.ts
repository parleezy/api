import { IsDate, IsNotEmpty, IsString } from 'class-validator'
import { Type } from 'class-transformer'

// Api
import { CompetitionType } from './_competition-type.type'

export class CompetitionCreateParams {
    @IsString()
    @IsNotEmpty()
    entity: string

    @IsString()
    @IsNotEmpty()
    type: CompetitionType

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    start: Date

    @Type(() => Date)
    @IsDate()
    @IsNotEmpty()
    end: Date
}
