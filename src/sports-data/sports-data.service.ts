import { ApiSportsService } from './apisports/services/apisports.service'

export class SportsDataService {
    constructor(private _apiSports: ApiSportsService) {}

    get apisports() {
        return this._apiSports
    }
}
