import { Injectable } from '@nestjs/common'

// Diagnostic
import { Diagnostic } from '@/system/diagnostic/schema/diagnostic.schema'
import { DiagnosticFactory } from '@/system/diagnostic/diagnostic.factory'
import { DiagnosticRepository } from '@/system/diagnostic/diagnostic.repository'

@Injectable()
export class DiagnosticService {
    constructor(
        protected _diagnosticFactory: DiagnosticFactory,
        private _diagnosticRepository: DiagnosticRepository,
    ) {}

    async create(diagnostic: Diagnostic): Promise<void> {
        await this._diagnosticRepository.create(diagnostic)
    }
}
