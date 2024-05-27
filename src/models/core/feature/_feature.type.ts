export const FeatureType = {
    USER_MANAGEMENT: 'USER_MANAGEMENT',
} as const

export type FeatureType = (typeof FeatureType)[keyof typeof FeatureType]
