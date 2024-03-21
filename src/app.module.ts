import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers/providers.module'
import { EventModule } from './events/event.module'
import { TaskModule } from './tasks/task.module'

@Module({
    imports: [
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),

        // Core
        ConfigModule,
        ProvidersModule,
        EventModule,
        TaskModule,

        // Features

        // Helpers
    ],
    controllers: [AppController],
})
export class AppModule {}
