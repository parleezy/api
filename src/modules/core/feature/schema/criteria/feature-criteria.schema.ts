import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

// Model
import { FeatureCriteriaUsers, FeatureCriteriaUsersSchema } from './feature-criteria-users.schema'
import { FeatureCriteriaCountries, FeatureCriteriaCountriesSchema } from './feature-criteria-countries.schema'

@Schema()
export class FeatureCriteria {
    @Prop({ _id: false, type: FeatureCriteriaUsersSchema })
    groups: FeatureCriteriaUsers

    @Prop({ _id: false, type: FeatureCriteriaCountriesSchema })
    countries: FeatureCriteriaCountries
}

export const FeatureCriteriaSchema = SchemaFactory.createForClass(FeatureCriteria)
