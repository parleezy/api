export const InitiantType = {
    SYSTEM: 'SYSTEM',
    OPERATOR: 'OPERATOR',
    USER: 'USER',
} as const

export type InitiantType = (typeof InitiantType)[keyof typeof InitiantType]
