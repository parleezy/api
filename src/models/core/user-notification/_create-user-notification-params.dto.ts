import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Types } from 'mongoose'

// Data
import { Core } from '@/models/core'

export class CreateUserNotificationParams {
    @IsString()
    title: string

    @IsString()
    description: string

    @IsString()
    action: string

    @IsBoolean()
    read: boolean

    @IsString()
    @IsNotEmpty()
    recipient: Types.ObjectId

    @IsString()
    @IsOptional()
    sender: Types.ObjectId

    @IsString()
    @IsNotEmpty()
    type: Core.UserNotificationType
}
