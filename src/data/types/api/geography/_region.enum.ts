export type RegionEnumType = (typeof RegionEnum)[keyof typeof RegionEnum]

export const RegionEnum = {
    AMERICAS: 'AMERICAS',
    ASIA_PACIFIC: 'ASIA_PACIFIC',
    EUROPE: 'EUROPE',
    MIDDLE_EAST_AFRICA: 'MIDDLE_EAST_AFRICA',
    WORLDWIDE: 'WORLDWIDE',
} as const
