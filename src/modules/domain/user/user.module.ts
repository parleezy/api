import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// User
import { User, UserSchema } from './schema/user.schema'
import { UserController } from './controllers/user.controller'
import { UserFactory } from './user.factory'
import { UserRepository } from './user.repository'
import { UserService } from './services/user.service'
import { UserAuthenticationListenerService } from './services/listeners/user-authentication-listeners'

// Utils
import { StringEncryptor } from '@/shared/utils'

// Data
import { System } from '@/models/system'

// Imports
import { PlayerModule } from '@/domain/player'
import { UserManagementController } from './controllers/user-management.controller'
import { UserManagementService } from './services/user-management.service'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema }], System.DatabaseName.DOMAIN),
        PlayerModule,
    ],
    controllers: [UserController, UserManagementController],
    providers: [
        StringEncryptor,
        UserRepository,
        UserService,
        UserFactory,
        UserAuthenticationListenerService,
        UserManagementService,
    ],
    exports: [UserService],
})
export class UserModule {}
