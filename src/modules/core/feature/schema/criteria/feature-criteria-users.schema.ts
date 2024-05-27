import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class FeatureCriteriaUsers {
    @Prop({ type: [Number], default: [] })
    allow: number[]

    @Prop({ type: [Number], default: [] })
    deny: number[]
}

export const FeatureCriteriaUsersSchema = SchemaFactory.createForClass(FeatureCriteriaUsers)
