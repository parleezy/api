import { Injectable } from '@nestjs/common'
import { OnEvent } from '@nestjs/event-emitter'
import { Request } from 'express'

// Data
import { System } from '@/models/system'

// Schemas
import { User } from '@/domain/user/schema/user.schema'

// Utils
import { ActivityService } from '../services/activity.service'

interface UserActivityPayload {
    user: User
    req: Request
}

@Injectable()
export class ActivityAuthenticationListenerService extends ActivityService {
    @OnEvent(System.EventType.SIGNUP_WITH_EMAIL)
    signupWithEmail(data: UserActivityPayload): void {
        this.create(this._activityFactory.authentication.signupWithEmail(data.user, data.req))
    }

    @OnEvent(System.EventType.LOGIN)
    login(data: UserActivityPayload): void {
        this.create(this._activityFactory.authentication.login(data.user, data.req))
    }

    @OnEvent(System.EventType.FORGOT_PASSWORD_REQUEST)
    recover(data: UserActivityPayload): void {
        this.create(this._activityFactory.authentication.recoverRequest(data.user, data.req))
    }

    @OnEvent(System.EventType.RESEND_EMAIL_VERIFICATION)
    resendVerification(data: UserActivityPayload): void {
        this.create(this._activityFactory.authentication.resendVerification(data.user, data.req))
    }

    @OnEvent(System.EventType.VERIFIED_EMAIL_CODE)
    verifyEmailCode(data: UserActivityPayload): void {
        this.create(this._activityFactory.authentication.verifyEmailCode(data.user, data.req))
    }

    @OnEvent(System.EventType.VERIFIED_EMAIL_LINK)
    verifyEmailLink(data: UserActivityPayload): void {
        this.create(this._activityFactory.authentication.verifyEmailLink(data.user, data.req))
    }
}
