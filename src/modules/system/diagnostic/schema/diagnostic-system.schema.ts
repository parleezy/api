import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'
import { System } from '@/models/system'

@Schema()
export class DiagnosticSystem {
    @Prop({ required: true })
    environment: string

    @Prop({
        type: String,
        enum: [...Object.values(System.ServiceType)],
    })
    service: System.ServiceType
}

export const DiagnosticSystemSchema = SchemaFactory.createForClass(DiagnosticSystem)
