export const PermissionActionType = {
    APPROVE: 'APPROVE',
    ARCHIVE: 'ARCHIVE',
    ASSIGN: 'ASSIGN',
    CONFIGURE: 'CONFIGURE',
    CREATE: 'CREATE',
    DELETE: 'DELETE',
    EDIT: 'EDIT',
    EXPORT: 'EXPORT',
    IMPORT: 'IMPORT',
    INVITE: 'INVITE',
    MANAGE_PAYMENTS: 'MANAGE_PAYMENTS',
    MODERATE: 'MODERATE',
    PROMOTE: 'PROMOTE',
    PUBLISH: 'PUBLISH',
    READ: 'READ',
    REJECT: 'REJECT',
    RESTORE: 'RESTORE',
    REVOKE: 'REVOKE',
    SUBSCRIBE: 'SUBSCRIBE',
    SUSPEND: 'SUSPEND',
    UNARCHIVE: 'UNARCHIVE',
    UNPUBLISH: 'UNPUBLISH',
    VIEW_DETAILS: 'VIEW_DETAILS',
} as const

export type PermissionActionType = (typeof PermissionActionType)[keyof typeof PermissionActionType]
