import { Controller, Get, UseGuards } from '@nestjs/common'

// Shared
import { AuthorizationGuard } from '@/shared/guards/authorization.guard'

// Api
import { Api } from '@/models/api'

// Guard
import { RoleGuard } from '@/shared/guards/role.guard'
import { EmployeesOnly } from '@/shared/decorators/role.decorator'

@Controller('users/management')
export class UserManagementController {
    @UseGuards(AuthorizationGuard, RoleGuard)
    @EmployeesOnly()
    @Get()
    async me(): Promise<Api.Response<string>> {
        return {
            data: 'User management baby',
            success: true,
        }
    }
}
