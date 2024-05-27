export const PermissionScopeType = {
    FULL: 'FULL',
    PARTIAL: 'PARTIAL',
    NONE: 'NONE',
} as const

export type PermissionScopeType = (typeof PermissionScopeType)[keyof typeof PermissionScopeType]
