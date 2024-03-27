import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionCoverageTable {
    @Prop({
        type: Boolean,
        default: false,
    })
    standings: boolean
}

export const CompetitionCoverageTableSchema = SchemaFactory.createForClass(CompetitionCoverageTable)
