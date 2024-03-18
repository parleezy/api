import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class LeagueIdentity {
    @Prop()
    abbreviation: string

    @Prop()
    description: string

    @Prop()
    founded: number

    @Prop()
    logo: string

    @Prop()
    name: string

    @Prop()
    shortname: string

    @Prop()
    website: string
}

export const LeagueIdentitySchema = SchemaFactory.createForClass(LeagueIdentity)
