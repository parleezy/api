export const FeatureGroupType = {
    USER_MANAGEMENT: 'USER_MANAGEMENT',
} as const

export type FeatureGroupType = (typeof FeatureGroupType)[keyof typeof FeatureGroupType]
