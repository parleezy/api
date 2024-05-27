import { Module } from '@nestjs/common'

// Modules
import { PlayerModule } from './player'
import { UserModule } from './user'

@Module({
    imports: [PlayerModule, UserModule],
})
export class DomainModule {}
