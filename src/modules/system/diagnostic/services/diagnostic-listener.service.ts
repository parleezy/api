import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { Request } from 'express'

// Data
import { Core } from '@/models/core'
import { System } from '@/models/system'

// Utils
import { DiagnosticService } from './diagnostic.service'

@Injectable()
export class DiagnosticListenerService extends DiagnosticService {
    @OnEvent(System.ErrorEventType.SIGNUP_ATTEMPT_WITH_EXISTING_EMAIL)
    async signupError(data: { dto: Core.EmailSignupParams; req: Request }) {
        await this.create(this._diagnosticFactory.create.signupError(data.dto, data.req))
    }
}
