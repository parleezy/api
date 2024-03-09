import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Reflector } from '@nestjs/core'

@Injectable()
export class RoleGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    matchRoles(roles: string[], playerRole: string) {
        return roles.some((role) => role === playerRole)
    }

    canActivate(context: ExecutionContext): boolean {
        const roles = this.reflector.get<string[]>('roles', context.getHandler())

        if (!roles) return true

        const request = context.switchToHttp().getRequest()
        const player = request.player

        return this.matchRoles(roles, player.role)
    }
}
