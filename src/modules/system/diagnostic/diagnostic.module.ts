import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { System } from '@/models/system'
import { Diagnostic, DiagnosticSchema } from './schema/diagnostic.schema'
import { DiagnosticRepository } from './diagnostic.repository'
import { DiagnosticService } from './services/diagnostic.service'
import { DiagnosticFactory } from './diagnostic.factory'
import { DiagnosticListenerService } from './services/diagnostic-listener.service'

@Module({
    imports: [
        MongooseModule.forFeature(
            [{ name: Diagnostic.name, schema: DiagnosticSchema }],
            System.DatabaseName.INFRASTRUCTURE,
        ),
    ],
    providers: [DiagnosticRepository, DiagnosticService, DiagnosticFactory, DiagnosticListenerService],
    exports: [DiagnosticService],
})
export class DiagnosticModule {}
