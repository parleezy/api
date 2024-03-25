import { FootballSeasonCoverage } from './_football-season-coverage.interface'

export interface FootballSeason {
    year: number
    start: string
    end: string
    current: boolean
    coverage: FootballSeasonCoverage
}
