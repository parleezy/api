import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class DiagnosticMeta {
    @Prop({ type: String })
    ip: string

    @Prop({ type: String })
    browser: string

    @Prop({ type: String })
    version: string

    @Prop({ type: String })
    os: string

    @Prop({ type: String })
    platform: string

    @Prop({ type: String })
    source: string
}

export const DiagnosticMetaSchema = SchemaFactory.createForClass(DiagnosticMeta)
