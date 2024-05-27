export const RoleType = {
    ADMINISTRATOR: 'ADMINISTRATOR',
    OWNER: 'OWNER',
    OPERATOR: 'OPERATOR',
    PLAYER: 'PLAYER',
} as const

export type RoleType = (typeof RoleType)[keyof typeof RoleType]
