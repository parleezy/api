export const HostType = {
    API_SPORTS: 'AS',
} as const

export type HostType = (typeof HostType)[keyof typeof HostType]
