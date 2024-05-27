import { Core } from '@/models/core'

export interface JwtPayload {
    player: string
    user: string
    role: Core.RoleType
    verified: boolean
}
