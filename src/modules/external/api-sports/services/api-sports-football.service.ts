import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios, { AxiosInstance } from 'axios'

// Api
import { ApiSportsType } from '@/models/api-sports'

@Injectable()
export class ApiSportsFootballService {
    private _api: AxiosInstance

    constructor(private _configService: ConfigService) {
        this._api = axios.create({
            baseURL: `https://v3.football.api-sports.io/`,
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': this._configService.get<string>('external.apisports'),
            },
        })
    }

    async listLeagues(): Promise<ApiSportsType.FootballLeague[]> {
        const response = await this._api.get('/leagues')

        return response.data.response
    }

    async getLeagueById(id: string): Promise<ApiSportsType.FootballLeague | null> {
        const response = await this._api.get(`/leagues?id=${id}`)

        return response.data.response[0]
    }

    async getCompetitionTeams(league: string, season: string): Promise<ApiSportsType.FootballTeam[]> {
        const response = await this._api.get(`/teams?league=${league}&season=${season}`)

        return response.data.response
    }
}
