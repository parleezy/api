import { AuthenticationEvent } from './_authentication'
import { ErrorEvent } from './_error'
import { EmailEvent } from './_mailer'

export const EventType = {
    ...AuthenticationEvent,
}

export type EventType = (typeof EventType)[keyof typeof EventType]

export const ErrorEventType = {
    ...ErrorEvent,
}

export type ErrorEventType = (typeof ErrorEventType)[keyof typeof ErrorEventType]

export const EmailEventType = {
    ...EmailEvent,
}

export type EmailEventType = (typeof EmailEventType)[keyof typeof EmailEventType]
