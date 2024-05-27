export const ServiceType = {
    AUTHENTICATION: 'AUTHENTICATION',
    DIAGNOSTIC: 'DIAGNOSTIC',
    PLAYER: 'PLAYER',
    USER: 'USER',
} as const

export type ServiceType = (typeof ServiceType)[keyof typeof ServiceType]
