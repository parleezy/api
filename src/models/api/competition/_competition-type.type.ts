export const CompetitionType = {
    LEAGUE: 'League',
    CUP: 'Cup',
} as const

export type CompetitionType = (typeof CompetitionType)[keyof typeof CompetitionType]
