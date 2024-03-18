import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class LeagueLocationHq {
    @Prop()
    street: string

    @Prop()
    street2: string

    @Prop()
    city: string

    @Prop()
    state: string

    @Prop()
    postalcode: string

    @Prop()
    country: string

    @Prop()
    lat: number

    @Prop()
    lng: number
}

export const LeagueLocationHqSchema = SchemaFactory.createForClass(LeagueLocationHq)
