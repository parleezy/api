import { IsNotEmpty, IsString, IsOptional, IsNumber, IsArray, IsBoolean } from 'class-validator'

// Api
import { Api } from '@/data/types/api'

export class VenueCreateParams {
    @IsString()
    @IsNotEmpty()
    type: Api.VenueType

    /**
     * Address
     */
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

    @IsNumber()
    @IsOptional()
    lat: number

    @IsNumber()
    @IsOptional()
    lng: number

    /**
     * Identity
     */
    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsOptional()
    nickname: string

    @IsArray()
    @IsNotEmpty()
    former: string[]

    /**
     * Information
     */
    @IsNumber()
    @IsOptional()
    capacity: number

    @IsArray()
    @IsOptional()
    sports: Api.SportType[]

    /**
     * Settings
     */
    @IsBoolean()
    @IsOptional()
    active: boolean
}
