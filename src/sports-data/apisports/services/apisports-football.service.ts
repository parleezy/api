import { ApiSportsType } from '@/models/sports-data'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import axios, { AxiosInstance } from 'axios'

@Injectable()
export class ApiSportsFootballService {
    private _api: AxiosInstance

    constructor(private _configService: ConfigService) {
        this._api = axios.create({
            baseURL: `https://v3.football.api-sports.io/`,
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': this._configService.get<string>('sports-data.apisports'),
            },
        })
    }

    async listLeagues(): Promise<ApiSportsType.FootballLeague[]> {
        const response = await this._api.get('/leagues')

        return response.data.response
    }

    async getCompetitionTeams(league: string, season: string): Promise<ApiSportsType.FootballTeam[]> {
        const response = await this._api.get(`/teams?league=${league}&season=${season}`)

        console.log(response)

        return response.data.response
    }
}
