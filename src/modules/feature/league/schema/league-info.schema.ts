import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class LeagueInfo {
    @Prop({
        type: String,
        required: true,
    })
    name: string
}

export const LeagueInfoSchema = SchemaFactory.createForClass(LeagueInfo)
