import { registerAs } from '@nestjs/config'

export const sportsDataConfig = registerAs('sports-data', () => ({
    apisports: process.env.API_SPORTS,
}))
