import { Module } from '@nestjs/common'

// Third party sports data
import { ApiSportsModule } from './api-sports/api-sports.module'

@Module({
    imports: [ApiSportsModule],
    exports: [ApiSportsModule],
})
export class ExternalModule {}
