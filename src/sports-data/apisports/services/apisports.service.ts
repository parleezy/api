import { Injectable } from '@nestjs/common'

// Service
import { ApiSportsFootballService } from './apisports-football.service'

@Injectable()
export class ApiSportsService {
    constructor(private _footballService: ApiSportsFootballService) {}

    get football() {
        return this._footballService
    }
}
