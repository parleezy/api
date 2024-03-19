export const RegionType = {
    AMERICAS: 'AMERICAS',
    ASIA_PACIFIC: 'ASIA_PACIFIC',
    EUROPE: 'EUROPE',
    MIDDLE_EAST_AFRICA: 'MIDDLE_EAST_AFRICA',
    WORLDWIDE: 'WORLDWIDE',
} as const

export type RegionType = (typeof RegionType)[keyof typeof RegionType]
