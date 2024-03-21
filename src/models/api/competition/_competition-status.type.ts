export const CompetitionStatusType = {
    ANNOUNCED: 'ANNOUNCED',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED',
    RUNNING: 'RUNNING',
}

export type CompetitionStatusType = (typeof CompetitionStatusType)[keyof typeof CompetitionStatusType]
