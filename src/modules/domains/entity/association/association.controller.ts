import { Controller, Get, Post, Body, Param } from '@nestjs/common'

// Api
import { Api } from '@/data/types/api'

// Association
import { AssociationService } from './association.service'
import { Association } from './schema/association.schema'

@Controller('associations')
export class AssociationController {
    constructor(private _associationService: AssociationService) {}

    @Post()
    async create(@Body() body: Api.TeamCreateParams): Promise<Api.Response<Association>> {
        const data = await this._associationService.create(body)

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
