import { Injectable } from '@nestjs/common'
import { AssociationRepository } from './association.repository'
import { Association } from './association.schema'
import { Api } from '@/data/types/api'

@Injectable()
export class AssociationService {
    constructor(private _associationRepository: AssociationRepository) {}

    private async _retrieveById(id: string): Promise<Association | null> {
        return await this._associationRepository.retrieve(id)
    }

    async create(dto: Api.AssociationCreateParams): Promise<Association> {
        return await this._associationRepository.create(dto)
    }

    async list(): Promise<Association[]> {
        return await this._associationRepository.list()
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Association | null> => this._retrieveById(id),
        }
    }
}
