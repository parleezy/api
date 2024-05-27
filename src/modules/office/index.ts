import { Module } from '@nestjs/common'
import { KanbanModule } from './kanban'

@Module({
    imports: [KanbanModule],
})
export class OfficeModule {}
