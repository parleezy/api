import { IsBoolean, IsNotEmpty, IsString } from 'class-validator'

// Data
import { Core } from '@/models/core'

export class CreateFeatureParams {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    group: Core.FeatureGroupType

    @IsString()
    @IsNotEmpty()
    type: Core.FeatureType

    @IsBoolean()
    @IsNotEmpty()
    enabled: boolean
}
