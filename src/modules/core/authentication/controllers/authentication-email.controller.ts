import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'

// Data
import { Api } from '@/models/api'
import { Core } from '@/models/core'

// Service
import { AuthenticationEmailService } from '@/core/authentication/services/authentication-email.service'
import { User } from '@/domain/user/schema/user.schema'

// Shared
import { GetPayload } from '@/shared/decorators/get-payload.decorator'
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'

@Controller('authentication/email')
export class AuthenticationEmailController {
    constructor(private _authenticationEmailService: AuthenticationEmailService) {}

    @Post('forgot')
    async forgot(@Req() req: Request, @Body() dto: Core.EmailRecoveryParams): Promise<Api.Response<null>> {
        await this._authenticationEmailService.forgotPassword(dto, req)

        return {
            data: null,
            success: true,
        }
    }

    @Post('login')
    async login(@Req() req: Request, @Body() dto: Core.EmailLoginParams): Promise<Api.Response<Core.Tokens>> {
        const data = await this._authenticationEmailService.login(dto, req)

        return {
            data,
            success: true,
        }
    }

    @Post('reset')
    async reset(@Req() req: Request, @Body() dto: Core.EmailResetParams): Promise<Api.Response<Core.Tokens>> {
        const data = await this._authenticationEmailService.resetPassword(dto, req)

        return {
            data,
            success: true,
        }
    }

    @Post('signup')
    async signupWithEmail(
        @Req() req: Request,
        @Body() dto: Core.EmailSignupParams,
    ): Promise<Api.Response<Core.Tokens>> {
        await this._authenticationEmailService.signup(dto, req)

        const data = await this._authenticationEmailService.login(dto, req)

        return {
            data,
            success: true,
        }
    }

    @UseGuards(AuthorizationGuard)
    @Post('verification/code')
    async verifyWithCode(
        @Req() req: Request,
        @GetPayload() payload: Core.JwtPayload,
        @Body() dto: Core.EmailVerificationCodeParams,
    ): Promise<Api.Response<Core.Tokens>> {
        const data = await this._authenticationEmailService.verifyCode(dto, payload.user, req)

        return {
            data,
            success: true,
        }
    }

    @UseGuards(AuthorizationGuard)
    @Post('verification/resend')
    async resendVerification(
        @Req() req: Request,
        @GetPayload() payload: Core.JwtPayload,
    ): Promise<Api.Response<Partial<User>>> {
        const data = await this._authenticationEmailService.resendVerification(payload.user, req)

        // Sanitize sensative data
        data.tokens = null
        data.credentials = null

        return {
            data,
            success: true,
        }
    }

    @Post('verification/link')
    async verifyWithLink(
        @Req() req: Request,
        @Body() dto: Core.EmailVerificationLinkParams,
    ): Promise<Api.Response<Core.Tokens>> {
        const data = await this._authenticationEmailService.verifyLink(dto, req)

        return {
            data,
            success: true,
        }
    }
}
