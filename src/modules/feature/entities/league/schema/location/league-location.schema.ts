import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schema
import { LeagueLocationOperation, LeagueLocationOperationSchema } from './league-operation.schema'
import { LeagueLocationHq, LeagueLocationHqSchema } from './league-hq.schema'

@Schema()
export class LeagueLocation {
    @Prop({ _id: false, type: LeagueLocationHqSchema })
    hq: LeagueLocationHq

    @Prop({ _id: false, type: LeagueLocationOperationSchema })
    operation: LeagueLocationOperation
}

export const LeagueLocationSchema = SchemaFactory.createForClass(LeagueLocation)
