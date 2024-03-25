import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/models/api'

// Association
import { Association } from '@/association/schema/association.schema'
import { AssociationFactory } from '@/association/association.factory'
import { AssociationRepository } from '@/association/association.repository'

// Competition
import { Competition } from '@/competition/competition.schema'

@Injectable()
export class AssociationService {
    constructor(
        private _associationFactory: AssociationFactory,
        private _associationRepository: AssociationRepository,
    ) {}

    create(_: Api.AssociationCreateParams): Promise<Association> {
        return this._associationRepository.create(this._associationFactory.create())
    }

    list(): Promise<Association[]> {
        return this._associationRepository.list()
    }

    retrieve(id: string): Promise<Association> {
        return this._associationRepository.retrieve(id)
    }

    async addCompetition(association: string, competition: Competition): Promise<Association> {
        return await this._associationRepository.update(association, { $push: { competitions: competition._id } })
    }
}
