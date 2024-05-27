import { Injectable } from '@nestjs/common'

// Models
import { Core } from '@/models/core'

// Schema
import { Feature } from './schema/feature.schema'

@Injectable()
export class FeatureFactory {
    create(dto: Core.CreateFeatureParams): Feature {
        const feature = new Feature()

        feature.title = dto.title
        feature.description = dto.description
        feature.enabled = dto.enabled
        feature.group = dto.group
        feature.type = dto.type

        feature.criteria = {
            groups: {
                allow: [],
                deny: [],
            },
            countries: {
                allow: [],
                deny: [],
            },
        }

        return feature
    }
}
