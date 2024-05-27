import { Controller, Get, UseGuards } from '@nestjs/common'

// User
import { UserService } from '@/domain/user/services/user.service'

// Shared
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'
import { GetPayload } from '@/shared/decorators/get-payload.decorator'

// Core
import { Api } from '@/models/api'
import { Core } from '@/models/core'

@Controller('users')
export class UserController {
    constructor(private _userService: UserService) {}

    @UseGuards(AuthorizationGuard)
    @Get('me')
    async me(@GetPayload() payload: Core.JwtPayload): Promise<Api.Response<Api.SanitizedUser>> {
        const data = await this._userService.retrieve.byId(payload.user)

        return {
            data: {
                _id: data._id,
                role: data.role,
                verified: data.verified,
                email: data.credentials.email.email,
            },
            success: true,
        }
    }
}
