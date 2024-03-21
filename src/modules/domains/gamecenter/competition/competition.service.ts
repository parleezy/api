import { Injectable, NotFoundException } from '@nestjs/common'
import { EventEmitter2 } from '@nestjs/event-emitter'

// Types
import { Api } from '@/data/types/api'

// Competition
import { Competition } from './schema/competition.schema'
import { CompetitionFactory } from './competition.factory'
import { CompetitionRepository } from './competition.repository'
import { CompetitionCreatedEvent } from './events/competition-create.event'

@Injectable()
export class CompetitionService {
    constructor(
        private _competitionFactory: CompetitionFactory,
        private _competitionRepository: CompetitionRepository,
        private _eventEmitter: EventEmitter2,
    ) {}

    /**
     * Internal
     */
    private async _retrieveById(id: string): Promise<Competition | null> {
        return await this._competitionRepository.retrieve(id)
    }

    /**
     * Public
     */
    async create(dto: Api.CompetitionCreateParams): Promise<Competition> {
        const competition = await this._competitionRepository.create(this._competitionFactory.create(dto))

        this._eventEmitter.emit('competition.created', new CompetitionCreatedEvent(competition, 'jfdsfslk'))

        return competition
    }

    async list(): Promise<Competition[]> {
        return await this._competitionRepository.list()
    }

    async update(id: string, dto: Api.CompetitionUpdateParams): Promise<Competition> {
        const competition = await this._retrieveById(id)

        if (!competition) {
            throw new NotFoundException('Cannot update Competition')
        }

        return await this._competitionRepository.update(id, this._competitionFactory.update(competition, dto))
    }

    get retrieve() {
        return {
            byId: (id: string): Promise<Competition | null> => this._retrieveById(id),
        }
    }
}
