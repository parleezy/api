import { Module } from '@nestjs/common'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

// Controllers
import { AppController } from './app.controller'

@Module({
    imports: [
        // Core Modules
        ConfigModule,
        ProvidersModule,
    ],
    controllers: [AppController],
})
export class AppModule {}
