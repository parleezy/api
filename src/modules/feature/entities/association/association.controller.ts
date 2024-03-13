import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Service
import { AssociationService } from './association.service'

// Types
import { Api } from '@/data/types/api'
import { Association } from './schema/association.schema'

@Controller('associations')
export class AssociationController {
    constructor(private _associationService: AssociationService) {}

    @Post()
    async create(@Body() dto: Api.AssociationCreateParams): Promise<Api.Response<Association>> {
        const data = await this._associationService.create(dto)

        return {
            data,
            success: true,
        }
    }

    @Get()
    async list(): Promise<Api.Response<Association[]>> {
        const data = await this._associationService.list()

        return {
            data,
            success: true,
        }
    }

    @Get(':id')
    async retrieveById(@Param('id') id: string): Promise<Api.Response<Association | null>> {
        const data = await this._associationService.retrieve.byId(id)

        return {
            data,
            success: true,
        }
    }
}
