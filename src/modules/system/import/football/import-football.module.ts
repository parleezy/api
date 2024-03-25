import { Module } from '@nestjs/common'

// Modules
import { ApiSportsModule } from '@/modules/external/api-sports/api-sports.module'

@Module({
    imports: [ApiSportsModule],
    exports: [],
})
export class ImportFootballModule {}
