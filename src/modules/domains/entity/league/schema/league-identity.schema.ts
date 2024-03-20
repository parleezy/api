import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class LeagueIdentity {
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

    @Prop({
        type: Number,
    })
    founded: number

    @Prop({
        type: String,
    })
    description: string
}

export const LeagueIdentitySchema = SchemaFactory.createForClass(LeagueIdentity)
