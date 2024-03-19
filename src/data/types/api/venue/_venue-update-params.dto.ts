import { IsString, IsOptional, IsNumber, IsArray, IsBoolean } from 'class-validator'

// Api
import { Api } from '@/data/types/api'

export class VenueUpdateParams {
    @IsString()
    @IsOptional()
    type: Api.VenueType

    /**
     * Address
     */
    @IsString()
    @IsOptional()
    street: string

    @IsString()
    @IsOptional()
    flat: string

    @IsString()
    @IsOptional()
    postalcode: string

    @IsString()
    @IsOptional()
    city: string

    @IsString()
    @IsOptional()
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
    @IsOptional()
    name: string

    @IsString()
    @IsOptional()
    nickname: string

    @IsArray()
    @IsOptional()
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
