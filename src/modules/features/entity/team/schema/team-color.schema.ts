import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class TeamColor {
    @Prop({
        type: String,
    })
    primary: string

    @Prop({
        type: String,
    })
    secondary: string

    @Prop({
        type: String,
    })
    tertiary: string
}

export const TeamColorSchema = SchemaFactory.createForClass(TeamColor)
