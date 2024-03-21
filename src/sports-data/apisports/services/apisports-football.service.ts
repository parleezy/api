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
}
