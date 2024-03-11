export interface BaseballLeague {
    id: number
    name: string
    type: string
    logo: string
    country: {
        id: number
        name: string
        code: string
        flag: string
    }
    seasons: SeasonType[]
}

interface SeasonType {
    season: number
    current: boolean
    start: string
    end: string
}
