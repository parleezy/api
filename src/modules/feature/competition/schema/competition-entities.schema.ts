import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Types } from 'mongoose'

// Schemas
// import { League } from '@/league/schema/league.schema'

@Schema({
    _id: false,
})
export class CompetitionEntities {
    @Prop({
        type: Types.ObjectId,
        ref: 'League',
        // ref: League.name,
    })
    league: Types.ObjectId
}

export const CompetitionEntitiesSchema = SchemaFactory.createForClass(CompetitionEntities)
