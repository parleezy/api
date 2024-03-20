import { Injectable } from '@nestjs/common'

// Types
import { Api } from '@/data/types/api'

// Schema
import { Association } from './schema/association.schema'

@Injectable()
export class AssociationFactory {
    create(dto: Api.AssociationCreateParams): Association {
        return this.assignProperties(new Association(), dto)
    }

    update(association: Association, dto: Api.AssociationUpdateParams): Association {
        return this.assignProperties(association, dto)
    }

    private assignProperties(association: Association, dto: Api.AssociationCreateParams): Association {
        return association
    }

    private filterProperties(dto: Api.TeamCreateParams, properties: string[]): Partial<Association> {
        return properties.reduce((acc, prop) => {
            if (dto[prop] !== undefined) {
                acc[prop] = dto[prop]
            }
            return acc
        }, {})
    }
}
