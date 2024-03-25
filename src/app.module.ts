import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/providers/providers.module'

// Features
import { LeagueModule } from '@/league/league.module'

@Module({
    imports: [ConfigModule, ProvidersModule, EventEmitterModule.forRoot(), ScheduleModule.forRoot(), LeagueModule],
    controllers: [AppController],
})
export class AppModule {}
