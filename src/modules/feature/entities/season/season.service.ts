import { Injectable } from '@nestjs/common'
import { SeasonRepository } from './season.repository'
import { Season } from './season.schema'
import { Api } from '@/data/types/api'

@Injectable()
export class SeasonService {
    constructor(private _seasonRepository: SeasonRepository) {}

    private async _retrieveById(id: string): Promise<Season | null> {
        return await this._seasonRepository.retrieve(id)
    }

    async create(dto: Api.SeasonCreateParams): Promise<Season> {
        return await this._seasonRepository.create(dto)
    }

    async list(): Promise<Season[]> {
        return await this._seasonRepository.list()
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Season | null> => this._retrieveById(id),
        }
    }
}
