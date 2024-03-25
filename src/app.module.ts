import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers/providers.module'
import { EventModule } from '@/events/event.module'
import { TaskModule } from '@/tasks/task.module'

// Modules
import { CompetitionModule } from '@/modules/competition/competition.module'
import { LeagueModule } from './modules/league/league.module'

// External Sources
import { SportsDataModule } from '@/sports-data/sports-data.module'

@Module({
    imports: [
        ConfigModule,
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),

        // Core
        ProvidersModule,
        EventModule,
        TaskModule,

        // Features
        CompetitionModule,
        LeagueModule,

        // External Api Sources
        SportsDataModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
