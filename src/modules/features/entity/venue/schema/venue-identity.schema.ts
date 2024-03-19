import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class VenueIdentity {
    @Prop({
        type: String,
        required: true,
    })
    name: string

    @Prop({
        type: String,
        required: true,
    })
    nickname: string

    @Prop({
        type: [String],
    })
    former: string[]
}

export const VenueIdentitySchema = SchemaFactory.createForClass(VenueIdentity)
