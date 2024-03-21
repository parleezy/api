import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

// Controllers
import { AppController } from './app.controller'

// Features
import { EntityModule } from './modules/domains/entity/entity.module'
import { GamecenterModule } from './modules/domains/gamecenter/gamecenter.module'

@Module({
    imports: [
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),

        // Core Modules
        ConfigModule,
        ProvidersModule,

        // Features
        EntityModule,
        GamecenterModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
