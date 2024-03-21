export const CompetitionType = {
    SEASON: 'SEASON',
    TOURNAMENT: 'TOURNAMENT',
    EVENT: 'EVENT',
}

export type CompetitionType = (typeof CompetitionType)[keyof typeof CompetitionType]
