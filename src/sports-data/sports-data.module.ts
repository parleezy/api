import { Module } from '@nestjs/common'

// Module
import { ApiSportsModule } from './apisports/apisports.module'

// Services
import { SportsDataService } from './sports-data.service'

@Module({
    imports: [ApiSportsModule],
    providers: [SportsDataService],
    exports: [SportsDataService],
})
export class SportsDataModule {}
