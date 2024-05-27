import { Core } from '@/models/core'

export interface SanitizedUser {
    _id: string
    role: Core.RoleType
    verified: boolean
    email: string
}
