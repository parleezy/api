import { IsNotEmpty, IsString, IsOptional } from 'class-validator'

// Api
import { Api } from '@/data/types/api'

export class VenueCreateParams {
    @IsString()
    @IsNotEmpty()
    type: Api.VenueType

    @IsString()
    @IsNotEmpty()
    street: string

    @IsString()
    @IsOptional()
    flat: string

    @IsString()
    @IsNotEmpty()
    postalcode: string

    @IsString()
    @IsNotEmpty()
    city: string

    @IsString()
    @IsNotEmpty()
    country: Api.CountryType
}
