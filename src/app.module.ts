import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { ScheduleModule } from '@nestjs/schedule'

// Controllers
import { AppController } from '@/app.controller'

// Modules
import { ConfigModule } from './config'
import { CoreModule } from '@/core/index'
import { DomainModule } from '@/domain/index'
import { ProvidersModule } from './providers'
import { SystemModule } from '@/system/index'

// Middleware
import { UserAgentMiddleware } from './middleware/user-agent/user-agent.middleware'
import { IpMiddleware } from './middleware/ip'
import { OfficeModule } from './modules/office'

@Module({
    imports: [
        EventEmitterModule.forRoot(),
        ScheduleModule.forRoot(),
        ConfigModule,
        CoreModule,
        DomainModule,
        ProvidersModule,
        SystemModule,
        OfficeModule,
    ],
    controllers: [AppController],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(UserAgentMiddleware, IpMiddleware).forRoutes('*')
    }
}
