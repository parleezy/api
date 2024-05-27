import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { FeatureCriteria, FeatureCriteriaSchema } from './criteria/feature-criteria.schema'

// Data
import { Core } from '@/models/core'

export type FeatureDocument = Feature & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Feature {
    _id: string

    @Prop({ type: String })
    title: string

    @Prop({ type: String })
    description: string

    @Prop({ type: String })
    group: string

    @Prop({ type: Boolean })
    enabled: boolean

    @Prop({
        type: String,
        enum: [...Object.values(Core.FeatureType)],
    })
    type: Core.FeatureType

    @Prop({ _id: false, type: FeatureCriteriaSchema })
    criteria: FeatureCriteria
}

const FeatureSchema = SchemaFactory.createForClass(Feature)

FeatureSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { FeatureSchema }
