import { Schema, SchemaFactory } from '@nestjs/mongoose'

export type EventDocument = Event & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Event {
    _id: string
}

export const EventSchema = SchemaFactory.createForClass(Event)
