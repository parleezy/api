export const UserNotificationType = {
    NEW_LOGIN: 'NEW_LOGIN',
} as const

export type UserNotificationType = (typeof UserNotificationType)[keyof typeof UserNotificationType]
