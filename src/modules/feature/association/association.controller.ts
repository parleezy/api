import { Body, Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Association
import { Association } from './schema/association.schema'
import { AssociationService } from './services/association.service'

@Controller('associations')
export class AssociationController {
    constructor(private _associationService: AssociationService) {}

    @Get()
    async list(): Promise<Api.Response<Association[]>> {
        const data = await this._associationService.list()

        return {
            data,
            success: true,
        }
    }

    @Post()
    async create(@Body() dto: Api.AssociationCreateParams): Promise<Api.Response<Association>> {
        const data = await this._associationService.create(dto)

        return {
            data,
            success: true,
        }
    }

    @Get(`:id`)
    async getById(@Param('id') id: string): Promise<Api.Response<Association>> {
        const data = await this._associationService.retrieve(id)

        return {
            data,
            success: true,
        }
    }
}
