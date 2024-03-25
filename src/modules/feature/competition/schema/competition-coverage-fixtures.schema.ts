import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

@Schema({
    _id: false,
})
export class CompetitionCoverageFixtures {
    @Prop({
        type: Boolean,
        default: false,
    })
    events: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    lineups: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    statistics_players: boolean

    @Prop({
        type: Boolean,
        default: false,
    })
    statistics_teams: boolean
}

export const CompetitionCoverageFixturesSchema = SchemaFactory.createForClass(CompetitionCoverageFixtures)
