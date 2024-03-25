import { Module } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from '@/app.controller'

// Core Modules
import { ConfigModule } from '@/config'

@Module({
    imports: [ConfigModule, EventEmitterModule.forRoot(), ScheduleModule.forRoot()],
    controllers: [AppController],
})
export class AppModule {}
