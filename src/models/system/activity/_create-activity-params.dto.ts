import { IsNotEmpty, IsObject, IsString, IsOptional } from 'class-validator'
import { Types } from 'mongoose'

// Data
import { System } from '@/models/system'

export class CreateActivityParams {
    @IsString()
    @IsNotEmpty()
    initiant: System.InitiantType

    @IsString()
    @IsNotEmpty()
    name: System.EventType

    /**
     * Information
     */
    @IsString()
    @IsNotEmpty()
    description: string

    @IsObject()
    payload: { [key: string]: string | number | boolean }

    /**
     * System
     */
    @IsString()
    @IsNotEmpty()
    environment: string

    /**
     * User
     */
    @IsString()
    @IsOptional()
    id: Types.ObjectId
}
