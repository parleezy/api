import { Module } from '@nestjs/common'

// Modules
import { CompetitionModule } from './competition/competition.module'

@Module({
    imports: [CompetitionModule],
    exports: [CompetitionModule],
})
export class GamecenterModule {}
