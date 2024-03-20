export const SourceType = {
    AS: 'AS',
}

export type SourceType = (typeof SourceType)[keyof typeof SourceType]
