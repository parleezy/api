export const ErrorNameType = {
    SIGNUP_ATTEMPT_WITH_EXISTING_EMAIL: 'SIGNUP_ATTEMPT_WITH_EXISTING_EMAIL',
} as const

export type ErrorNameType = (typeof ErrorNameType)[keyof typeof ErrorNameType]
