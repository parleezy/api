import { registerAs } from '@nestjs/config'

export const providersConfig = registerAs('providers', () => ({
    mongo_connection_domain: process.env.MONGO_CONNECTION_DOMAIN,
    mongo_connection_infrastructure: process.env.MONGO_CONNECTION_INFRASTRUCTURE,
}))
