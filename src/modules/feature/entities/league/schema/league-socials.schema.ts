import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema()
export class LeagueSocials {
    @Prop()
    discord: string

    @Prop()
    facebook: string

    @Prop()
    instagram: string

    @Prop()
    linkedin: string

    @Prop()
    tiktok: string

    @Prop()
    youtube: string

    @Prop()
    x: string
}

export const LeagueSocialsSchema = SchemaFactory.createForClass(LeagueSocials)
