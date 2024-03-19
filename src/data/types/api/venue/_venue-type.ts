export const VenueType = {
    ARENA: 'ARENA',
    CENTER: 'CENTER',
    CIRCUIT: 'CIRCUIT',
    COURSE: 'COURSE',
    COURT: 'COURT',
    FIELD: 'FIELD',
    STADIUM: 'STADIUM',
}

export type VenueType = (typeof VenueType)[keyof typeof VenueType]
