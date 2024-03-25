import { Module } from '@nestjs/common'

// Module
import { ImportModule } from './import/import.module'

@Module({
    imports: [ImportModule],
    exports: [ImportModule],
})
export class SystemModule {}
