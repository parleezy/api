import { Controller, Get } from '@nestjs/common'

@Controller('venues')
export class VenueController {
    @Get()
    list() {
        return {
            message: 'this is working',
        }
    }
}
