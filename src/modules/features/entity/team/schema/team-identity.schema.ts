import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class TeamIdentity {
    @Prop({
        type: String,
        required: true,
    })
    name: string

    @Prop({
        type: String,
        required: true,
    })
    shortname: string

    @Prop({
        type: String,
        required: true,
    })
    abbreviation: string

    @Prop({
        type: String,
    })
    logo: string
}

export const TeamIdentitySchema = SchemaFactory.createForClass(TeamIdentity)
