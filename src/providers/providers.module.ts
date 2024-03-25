import { Module } from '@nestjs/common'

// Providers
import { MongoDatabaseProviderModule } from '@/providers/mongo/mongo.provider'

@Module({
    imports: [MongoDatabaseProviderModule],
})
export class ProvidersModule {}
