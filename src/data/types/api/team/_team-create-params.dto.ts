import { IsNotEmpty, IsString } from 'class-validator'

export class TeamCreateParams {
    @IsString()
    @IsNotEmpty()
    venue: string
}
