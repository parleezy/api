import { Module } from '@nestjs/common'

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
