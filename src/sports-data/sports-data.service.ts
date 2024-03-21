import { Injectable } from '@nestjs/common'

// Service
import { ApiSportsService } from './apisports/services/apisports.service'

@Injectable()
export class SportsDataService {
    constructor(private _apiSports: ApiSportsService) {}

    get apisports() {
        return this._apiSports
    }
}
