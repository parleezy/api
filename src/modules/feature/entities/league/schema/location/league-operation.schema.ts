import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class LeagueLocationOperation {
    @Prop()
    abbreviation: string
}

export const LeagueLocationOperationSchema = SchemaFactory.createForClass(LeagueLocationOperation)
