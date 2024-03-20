import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Api
import { Api } from '@/data/types/api'

@Schema({
    _id: false,
})
export class CompetitionApi {
    @Prop({
        type: String,
        enum: Object.values(Api.SourceType),
    })
    source: Api.SourceType

    @Prop({
        type: Number,
    })
    sourceid: number
}

export const CompetitionApiSchema = SchemaFactory.createForClass(CompetitionApi)
