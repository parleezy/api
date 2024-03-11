import { Module } from '@nestjs/common'

// Service
import { SportsApiBaseballController } from './baseball/sportsapi-baseball.controller'
import { SportsApiBaseballService } from './baseball/sportsapi-baseball.service'

@Module({
    controllers: [SportsApiBaseballController],
    providers: [SportsApiBaseballService],
    exports: [SportsApiBaseballService],
})
export class SportsApiModule {}
