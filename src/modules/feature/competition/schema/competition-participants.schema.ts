import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Schema
import { Team } from '@/team/schema/team.schema'

@Schema({
    _id: false,
})
export class CompetitionParticipants {
    @Prop({
        type: [Types.ObjectId],
        ref: Team.name,
    })
    teams: Types.ObjectId[]
}

export const CompetitionParticipantsSchema = SchemaFactory.createForClass(CompetitionParticipants)
