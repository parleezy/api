import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { SchemaTypes } from 'mongoose'

@Schema()
export class ActivityInformation {
    @Prop({ required: true })
    description: string

    @Prop({ type: Map, of: SchemaTypes.Mixed })
    payload: Record<string, unknown>
}

export const ActivityInformationSchema = SchemaFactory.createForClass(ActivityInformation)
