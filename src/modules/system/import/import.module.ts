import { Module } from '@nestjs/common'

// Modules
import { ApiSportsModule } from '@/modules/external/api-sports/api-sports.module'
import { ImportFootballModule } from './football/import-football.module'

@Module({
    imports: [ApiSportsModule, ImportFootballModule],
    exports: [ImportFootballModule],
})
export class ImportModule {}
