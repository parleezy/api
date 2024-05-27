export const DiagnosticMessage = {
    SIGNUP_EMAIL_EXISTS_ERROR: 'Signup attempt with existing email.',
} as const

export type DiagnosticMessage = (typeof DiagnosticMessage)[keyof typeof DiagnosticMessage]
