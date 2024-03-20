import { Module } from '@nestjs/common'

// Core Modules
import { ConfigModule } from '@/config'
import { ProvidersModule } from '@/data/providers'

// Controllers
import { AppController } from './app.controller'

// Features
import { EntityModule } from './modules/features/entity/entity.module'
import { GamecenterModule } from './modules/features/gamecenter/gamecenter.module'

@Module({
    imports: [
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
