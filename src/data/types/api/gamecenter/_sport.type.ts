export const SportType = {
    BASKETBALL: 'BASKETBALL',
    ICE_HOCKEY: 'ICE_HOCKEY',
}

export type SportType = (typeof SportType)[keyof typeof SportType]
