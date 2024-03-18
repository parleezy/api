import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class LeagueExternal {
    @Prop({
        type: Number,
    })
    id: number

    @Prop()
    source: string
}

export const LeagueExternalSchema = SchemaFactory.createForClass(LeagueExternal)
