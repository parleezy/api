import { IsArray, IsNotEmpty, IsNumber, IsObject, IsString, IsOptional } from 'class-validator'
import { Types } from 'mongoose'

// Data
import { System } from '@/models/system'

export class CreateDiagnosticParams {
    @IsString()
    @IsNotEmpty()
    initiant: System.InitiantType

    @IsString()
    @IsNotEmpty()
    name: System.ErrorNameType

    /**
     * Information
     */
    @IsArray()
    details: string[]

    @IsString()
    @IsNotEmpty()
    message: string

    @IsNumber()
    @IsNotEmpty()
    status: number

    @IsObject()
    payload: { [key: string]: string | number | boolean }

    /**
     * System
     */
    @IsString()
    @IsNotEmpty()
    environment: string

    @IsString()
    @IsNotEmpty()
    service: System.ServiceType

    /**
     * User
     */
    @IsString()
    @IsOptional()
    id: Types.ObjectId
}
