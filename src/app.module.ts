import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers/providers.module'

// Modules
import { ExternalModule } from './modules/external/external.module'
import { FeatureModule } from './modules/feature/feature.module'
import { SystemModule } from './modules/system/system.module'

@Module({
    imports: [
        ConfigModule,
        ProvidersModule,
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),
        ExternalModule,
        FeatureModule,
        SystemModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
