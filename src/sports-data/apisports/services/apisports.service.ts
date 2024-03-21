import { ApiSportsFootballService } from './apisports-football.service'

export class ApiSportsService {
    constructor(private _footballService: ApiSportsFootballService) {}

    get football() {
        return this._footballService
    }
}
