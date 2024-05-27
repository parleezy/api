export const ActivityDescription = {
    LOGIN: 'User has logged into the platform.',
    SIGNUP_WITH_EMAIL: 'User has signed up for the platform via email.',
    RECOVER_ACCOUNT_EMAIL_REQUEST: 'User has requested a password reset from the password reset login form',
    RESEND_EMAIL_VERIFICATION: 'User has requested the verification email be resent.',
    VERIFIED_EMAIL_CODE: 'User has verified there email address with code.',
    VERIFIED_EMAIL_LINK: 'User has verified there email with link.',
} as const

export type ActivityDescription = (typeof ActivityDescription)[keyof typeof ActivityDescription]
