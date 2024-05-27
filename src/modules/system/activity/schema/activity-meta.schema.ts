import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class ActivityMeta {
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

export const ActivityMetaSchema = SchemaFactory.createForClass(ActivityMeta)
