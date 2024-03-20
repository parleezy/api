import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Api
import { Api } from '@/data/types/api'

// Schemas
import { CompetitionApi, CompetitionApiSchema } from './competition-api.schema'
import { CompetitionConfig, CompetitionConfigSchema } from './competition-config.schema'
import { CompetitionParticipants, CompetitionParticipantsSchema } from './competition-participants.schema'
import { CompetitionSettings, CompetitionSettingsSchema } from './competition-settings.schema'
import { CompetitionDates, CompetitionDatesSchema } from './competition-dates.schema'

export type CompetitionDocument = Competition & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Competition {
    _id: string

    @Prop({
        type: String,
        enum: Object.values(Api.CompetitionStatusType),
        default: Api.CompetitionStatusType.ANNOUNCED,
    })
    status: Api.CompetitionStatusType

    @Prop({
        type: String,
        enum: Object.values(Api.CompetitionType),
        default: Api.CompetitionType.SEASON,
        required: true,
    })
    type: Api.CompetitionType

    @Prop({ _id: false, type: CompetitionApiSchema })
    api: CompetitionApi

    @Prop({ _id: false, type: CompetitionConfigSchema })
    config: CompetitionConfig

    @Prop({ _id: false, type: CompetitionDatesSchema })
    dates: CompetitionDates

    @Prop({ _id: false, type: CompetitionParticipantsSchema })
    participants: CompetitionParticipants

    @Prop({ _id: false, type: CompetitionSettingsSchema })
    settings: CompetitionSettings
}

const CompetitionSchema = SchemaFactory.createForClass(Competition)

CompetitionSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { CompetitionSchema }
