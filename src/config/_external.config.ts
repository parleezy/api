import { registerAs } from '@nestjs/config'

export const externalConfig = registerAs('external', () => ({
    apisports: process.env.API_SPORTS,
}))
