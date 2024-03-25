import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers/providers.module'

// Modules
import { FeatureModule } from './modules/feature/feature.module'

@Module({
    imports: [ConfigModule, ProvidersModule, EventEmitterModule.forRoot(), ScheduleModule.forRoot(), FeatureModule],
    controllers: [AppController],
})
export class AppModule {}
