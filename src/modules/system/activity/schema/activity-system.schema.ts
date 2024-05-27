import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class ActivitySystem {
    @Prop({ required: true })
    environment: string
}

export const ActivitySystemSchema = SchemaFactory.createForClass(ActivitySystem)
