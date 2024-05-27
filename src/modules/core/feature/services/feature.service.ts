import { Injectable } from '@nestjs/common'

// Data
import { Core } from '@/models/core'

// Feature
import { FeatureFactory } from '@/core/feature/feature.factory'
import { FeatureRepository } from '@/core/feature/feature.repository'
import { Feature } from '@/core/feature/schema/feature.schema'

@Injectable()
export class FeatureService {
    constructor(
        private _featureRepository: FeatureRepository,
        private _featureFactory: FeatureFactory,
    ) {}

    async create(dto: Core.CreateFeatureParams): Promise<Feature> {
        return await this._featureRepository.create(this._featureFactory.create(dto))
    }

    get retrieve() {
        return {
            list: async (): Promise<Feature[]> => {
                return this._featureRepository.list()
            },
        }
    }
}
