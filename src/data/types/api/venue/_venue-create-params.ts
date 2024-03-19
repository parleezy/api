import { IsNotEmpty, IsString } from 'class-validator'

export class VenueCreateParams {
    @IsString()
    @IsNotEmpty()
    name: string
}
