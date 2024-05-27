import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

// Data
import { System } from '@/models/system'

// Permission
import { Permission, PermissionSchema } from './schema/permission.schema'
import { PermissionController } from './controllers/permission.controller'
import { PermissionFactory } from './permission.factory'
import { PermissionRepository } from './premission.repository'
import { PermissionService } from './services/permission.service'

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Permission.name, schema: PermissionSchema }], System.DatabaseName.DOMAIN),
    ],
    controllers: [PermissionController],
    providers: [PermissionService, PermissionRepository, PermissionFactory],
    exports: [PermissionService],
})
export class PermissionModule {}
