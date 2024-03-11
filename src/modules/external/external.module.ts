import { Module } from '@nestjs/common'

import { SportsApiModule } from './sportsapi/sportsapi.module'

@Module({
    imports: [SportsApiModule],
    controllers: [],
    providers: [],
    exports: [],
})
export class ExternalApiModule {}
