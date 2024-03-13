import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Controllers
import { SeasonController } from './season.controller'

// Services
import { SeasonService } from './season.service'

// Season
import { Season, SeasonSchema } from './schema/season.schema'
import { SeasonRepository } from './season.repository'

@Module({
    imports: [MongooseModule.forFeature([{ name: Season.name, schema: SeasonSchema }])],
    controllers: [SeasonController],
    providers: [SeasonRepository, SeasonService],
    exports: [SeasonService],
})
export class SeasonModule {}
