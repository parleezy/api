import { Controller, Post, UseGuards } from '@nestjs/common'

// Data
import { Api } from '@/models/api'
import { Core } from '@/models/core'

// Service
import { AuthenticationService } from '@/core/authentication/services/authentication.service'

// Shared
import { RefreshGuard } from '@/shared/guards/refresh.guard'
import { GetPayload } from '@/shared/decorators/get-payload.decorator'
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'

@Controller('authentication')
export class AuthenticationController {
    constructor(private _authenticationService: AuthenticationService) {}

    @UseGuards(AuthorizationGuard)
    @Post('logout')
    async logout(@GetPayload() payload: Core.JwtPayload): Promise<Api.Response<null>> {
        await this._authenticationService.logout(payload)

        return {
            data: null,
            success: true,
        }
    }

    @UseGuards(RefreshGuard)
    @Post('refresh')
    async refresh(@GetPayload() payload: Core.JwtRefreshPayload): Promise<Api.Response<Core.Tokens>> {
        const data = await this._authenticationService.refresh(payload)

        return {
            data,
            success: true,
        }
    }
}
