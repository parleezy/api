import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Events
import { Event } from '@/modules/feature/gamecenter/event/schema/event.schema'

@Schema()
export class CompetitionEvents {
    @Prop({
        type: [Types.ObjectId],
        ref: Event.name,
    })
    preseason: Types.ObjectId[]

    @Prop({
        type: [Types.ObjectId],
        ref: Event.name,
    })
    season: Types.ObjectId[]

    @Prop({
        type: [Types.ObjectId],
        ref: Event.name,
    })
    playin: Types.ObjectId[]

    @Prop({
        type: [Types.ObjectId],
        ref: Event.name,
    })
    playoff: Types.ObjectId[]
}

export const CompetitionEventsSchema = SchemaFactory.createForClass(CompetitionEvents)
