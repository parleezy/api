import { Injectable } from '@nestjs/common'

// Association
import { AssociationFactory } from './association.factory'
import { AssociationRepository } from './association.repository'
import { Association } from './schema/association.schema'

// Api
import { Api } from '@/data/types/api'

@Injectable()
export class AssociationService {
    constructor(
        private _associationFactory: AssociationFactory,
        private _associationRepository: AssociationRepository,
    ) {}

    private async _retrieveById(id: string): Promise<Association | null> {
        return await this._associationRepository.retrieve(id)
    }

    async create(dto: Api.AssociationCreateParams): Promise<Association> {
        return await this._associationRepository.create(this._associationFactory.create(dto))
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
