import { Injectable } from '@nestjs/common'

// Association
import { Association } from './schema/association.schema'

@Injectable()
export class AssociationFactory {
    create(): Association {
        return new Association()
    }
}
