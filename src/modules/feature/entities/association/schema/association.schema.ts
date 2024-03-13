import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Socials
import { AssociationSocials, AssociationSocialsSchema } from './association-socials.schema'
import { AssociationInfo, AssociationInfoSchema } from './association-info.schema'
import { AssociationLocation, AssociationLocationSchema } from './location/association-location.schema'

export type AssociationDocument = Association & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Association {
    _id: string

    @Prop({ _id: false, type: AssociationInfoSchema })
    info: AssociationInfo

    @Prop({ _id: false, type: AssociationLocationSchema })
    location: AssociationLocation

    @Prop({ _id: false, type: AssociationSocialsSchema })
    socials: AssociationSocials
}

export const AssociationSchema = SchemaFactory.createForClass(Association)
