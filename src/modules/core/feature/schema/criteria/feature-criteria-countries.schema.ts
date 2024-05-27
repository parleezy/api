import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class FeatureCriteriaCountries {
    @Prop({ type: [Number], default: [] })
    allow: number[]

    @Prop({ type: [Number], default: [] })
    deny: number[]
}

export const FeatureCriteriaCountriesSchema = SchemaFactory.createForClass(FeatureCriteriaCountries)
