import { Injectable } from '@nestjs/common'

// Api
import { ApiSportsFootballService } from './api-sports-football.service'

@Injectable()
export class ApiSportsService {
    constructor(private _footballService: ApiSportsFootballService) {}

    get football() {
        return this._footballService
    }
}
