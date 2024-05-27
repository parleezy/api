import { Injectable } from '@nestjs/common'

// Schema
import { Permission } from './schema/permission.schema'

@Injectable()
export class PermissionFactory {
    create(): Permission {
        const permission = new Permission()

        return permission
    }
}
