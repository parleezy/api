import { IsNotEmpty, IsString } from 'class-validator'
import { Types } from 'mongoose'

export class CreatePlayerParams {
    @IsString()
    @IsNotEmpty()
    user: Types.ObjectId
}
