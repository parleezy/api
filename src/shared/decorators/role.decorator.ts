import { SetMetadata } from '@nestjs/common'

// Data
import { Core } from '@/models/core'

export const Roles = (...args: Core.RoleType[]) => SetMetadata('roles', args)

export const EmployeesOnly = () =>
    SetMetadata('roles', [Core.RoleType.ADMINISTRATOR, Core.RoleType.OPERATOR, Core.RoleType.OWNER])

export const OwnerOnly = () => SetMetadata('roles', [Core.RoleType.ADMINISTRATOR, Core.RoleType.OWNER])
