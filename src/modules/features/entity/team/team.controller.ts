import { Controller } from '@nestjs/common'

// Service
import { TeamService } from './team.service'

@Controller('teams')
export class TeamController {
    constructor(private _teamService: TeamService) {}
}
