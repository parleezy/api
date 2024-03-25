export interface FootballSeasonCoverage {
    fixtures: FootballFixtureCoverage
    injuries: boolean
    odds: boolean
    players: boolean
    predictions: boolean
    standings: boolean
    top_scorers: boolean
    top_assists: boolean
    top_cards: boolean
}

export interface FootballFixtureCoverage {
    events: boolean
    lineups: boolean
    statistics_fixtures: boolean
    statistics_players: boolean
}
