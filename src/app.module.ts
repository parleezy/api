import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'

// Features
import { LeagueModule } from '@/league/league.module'

@Module({
    imports: [ConfigModule, EventEmitterModule.forRoot(), ScheduleModule.forRoot(), LeagueModule],
    controllers: [AppController],
})
export class AppModule {}
