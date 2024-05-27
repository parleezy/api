import { Injectable } from '@nestjs/common'

import { UserService } from './user.service'

@Injectable()
export class UserManagementService extends UserService {}
