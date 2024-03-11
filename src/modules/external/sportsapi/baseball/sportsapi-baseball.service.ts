import { ConfigService } from '@nestjs/config'
import { Injectable } from '@nestjs/common'
import axios, { AxiosInstance } from 'axios'
import { SportsApi } from '@/data/types/sportsapi'

@Injectable()
export class SportsApiBaseballService {
    private _api: AxiosInstance

    constructor(private _configService: ConfigService) {
        this._api = axios.create({
            baseURL: `https://v1.baseball.api-sports.io/`,
            headers: {
                'Content-Type': 'application/json',
                'x-apisports-key': this._configService.get<string>('API_SPORTS'),
            },
        })
    }

    /**
     * Leagues
     */
    private async _retrieveLeagueById(id: string): Promise<SportsApi.BaseballLeague | null> {
        try {
            const response = await this._api.get(`/leagues?id=${id}`)

            return response.data.response
        } catch (err) {}
    }

    private async _listLeagues(country?: string, season?: string): Promise<SportsApi.BaseballLeague[]> {
        try {
            const queryParams = []

            if (country) {
                queryParams.push(`country=${country}`)
            }

            if (season) {
                queryParams.push(`season=${season}`)
            }

            const queryString = queryParams.join('&')

            let url = `/leagues`

            if (queryString) {
                url += `?${queryString}`
            }

            const response = await this._api.get(url)

            return response.data.response
        } catch (err) {}
    }

    private async _searchLeagues(term: string): Promise<SportsApi.BaseballLeague[]> {
        try {
            const response = await this._api.get(`/leagues?search=${term}`)

            return response.data.response
        } catch (err) {
            console.error('Error fetching leagues:', err)
            throw err
        }
    }

    get league() {
        return {
            byId: (id: string): Promise<SportsApi.BaseballLeague | null> => this._retrieveLeagueById(id),
            list: (country?: string, season?: string): Promise<SportsApi.BaseballLeague[]> =>
                this._listLeagues(country, season),
            search: (term: string): Promise<SportsApi.BaseballLeague[]> => this._searchLeagues(term),
        }
    }
}
