import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class TeamInfo {
    @Prop({
        type: String,
    })
    code: string

    @Prop({
        type: String,
    })
    country: string

    @Prop({
        type: Number,
    })
    founded: number

    @Prop({
        type: String,
    })
    name: string

    @Prop({
        type: String,
    })
    shortname: string
}

export const TeamInfoSchema = SchemaFactory.createForClass(TeamInfo)
