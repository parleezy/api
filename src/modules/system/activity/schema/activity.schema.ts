import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Schemas
import { ActivityDevice, ActivityDeviceSchema } from './activity-device.schema'
import { ActivityMeta, ActivityMetaSchema } from './activity-meta.schema'
import { ActivityUser, ActivityUserSchema } from './activity-user.schema'
import { ActivityInformation, ActivityInformationSchema } from './activity-information.schema'
import { ActivitySystem, ActivitySystemSchema } from './activity-system.schema'

// Data
import { System } from '@/models/system'

export type ActivityDocument = Activity & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Activity {
    _id: string

    @Prop({
        type: String,
        enum: [...Object.values(System.InitiantType)],
    })
    initiant: System.InitiantType

    @Prop({
        type: String,
        enum: [...Object.values(System.EventType)],
    })
    name: System.EventType

    @Prop({ _id: false, type: ActivityDeviceSchema })
    device: ActivityDevice

    @Prop({ _id: false, type: ActivityInformationSchema })
    information: ActivityInformation

    @Prop({ _id: false, type: ActivityMetaSchema })
    meta: ActivityMeta

    @Prop({ _id: false, type: ActivitySystemSchema })
    system: ActivitySystem

    @Prop({ _id: false, type: ActivityUserSchema })
    user: ActivityUser
}

const ActivitySchema = SchemaFactory.createForClass(Activity)

ActivitySchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { ActivitySchema }
