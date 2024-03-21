import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from './app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

@Module({
    imports: [EventEmitterModule.forRoot(), ScheduleModule.forRoot(), ConfigModule, ProvidersModule],
    controllers: [AppController],
})
export class AppModule {}
