import { Module } from '@nestjs/common'

// Providers
import { MongoDatabaseProviderModule } from '@/providers/mongo'

@Module({
    imports: [MongoDatabaseProviderModule],
})
export class ProvidersModule {}
