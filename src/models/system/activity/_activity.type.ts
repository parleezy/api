export const ActivityType = {
    SYSTEM: 'SYSTEM',
    OPERATOR: 'OPERATOR',
    USER: 'USER',
} as const

export type ActivityType = (typeof ActivityType)[keyof typeof ActivityType]
