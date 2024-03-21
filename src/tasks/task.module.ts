import { Module } from '@nestjs/common'

// Service
import { TaskService } from './task.service'

@Module({
    imports: [],
    providers: [TaskService],
    exports: [TaskService],
})
export class TaskModule {}
