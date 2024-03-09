import { RoleType } from './_role.type'

export interface JwtPayload {
    player: string
    profile: string
    role: RoleType
    verified: boolean
}
