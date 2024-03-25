import { Controller, Get, Param, Post } from '@nestjs/common'

// Api
import { Api } from '@/models/api'

// Fixture
import { Fixture } from './schema/fixture.schema'
import { FixtureService } from './services/fixture.service'

@Controller('fixtures')
export class FixtureController {
    constructor(private _fixtureService: FixtureService) {}

    @Get()
    async list(): Promise<Api.Response<Fixture[]>> {
        const data = await this._fixtureService.list()

        return {
            data,
            success: true,
        }
    }

    @Post()
    async create(): Promise<Api.Response<Fixture>> {
        const data = await this._fixtureService.create()

        return {
            data,
            success: true,
        }
    }

    @Get(`:id`)
    async getById(@Param('id') id: string): Promise<Api.Response<Fixture>> {
        const data = await this._fixtureService.retrieve(id)

        return {
            data,
            success: true,
        }
    }
}
