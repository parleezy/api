import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class LeagueLocationHq {
    @Prop()
    abbreviation: string
}

export const LeagueLocationHqSchema = SchemaFactory.createForClass(LeagueLocationHq)
