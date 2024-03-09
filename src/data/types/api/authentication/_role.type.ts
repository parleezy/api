export const RoleType = {
    OWNER: 'OWNER',
    STAFF: 'STAFF',
    PLAYER: 'PLAYER',
}

export type RoleType = (typeof RoleType)[keyof typeof RoleType]
