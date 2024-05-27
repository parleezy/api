import { Module } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { System } from '@/models/system'

@Module({
    imports: [
        MongooseModule.forRootAsync({
            connectionName: System.DatabaseName.DOMAIN,
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('providers.mongo_connection_domain'),
            }),
            inject: [ConfigService],
        }),
        MongooseModule.forRootAsync({
            connectionName: System.DatabaseName.INFRASTRUCTURE,
            useFactory: async (configService: ConfigService) => ({
                uri: configService.get<string>('providers.mongo_connection_infrastructure'),
            }),
            inject: [ConfigService],
        }),
    ],
})
export class MongoDatabaseProviderModule {}
