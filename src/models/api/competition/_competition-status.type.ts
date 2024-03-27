export const CompetitionStatusType = {
    ANNOUNCED: 'ANNOUNCED',
    RUNNING: 'RUNNING',
    COMPLETE: 'COMPLETE',
    CANCELLED: 'CANCELLED',
} as const

export type CompetitionStatusType = (typeof CompetitionStatusType)[keyof typeof CompetitionStatusType]
