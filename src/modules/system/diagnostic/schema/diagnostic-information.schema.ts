import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { SchemaTypes } from 'mongoose'

@Schema()
export class DiagnosticInformation {
    @Prop({ type: [String] })
    details: string[]

    @Prop({ required: true })
    message: string

    @Prop({ type: Number })
    status: number

    @Prop({ type: Map, of: SchemaTypes.Mixed })
    payload: Record<string, unknown>
}

export const DiagnosticInformationSchema = SchemaFactory.createForClass(DiagnosticInformation)
