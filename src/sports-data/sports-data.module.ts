import { Module } from '@nestjs/common'

// Services
import { SportsDataService } from './sports-data.service'

// Module
import { ApiSportsModule } from './apisports/apisports.module'

@Module({
    imports: [ApiSportsModule],
    providers: [SportsDataService],
    exports: [SportsDataService],
})
export class SportsDataModule {}
