import { System } from '@/models/system'
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

// Diagnostic Schemas
import { DiagnosticDevice, DiagnosticDeviceSchema } from './diagnostic-device.schema'
import { DiagnosticInformation, DiagnosticInformationSchema } from './diagnostic-information.schema'
import { DiagnosticSystem, DiagnosticSystemSchema } from './diagnostic-system.schema'
import { DiagnosticUser, DiagnosticUserSchema } from './diagnostic-user.schema'
import { DiagnosticMeta, DiagnosticMetaSchema } from './diagnotstic-meta.schema'

export type DiagnosticDocument = Diagnostic & Document

@Schema({
    _id: true,
    timestamps: true,
    versionKey: false,
})
export class Diagnostic {
    _id: string

    @Prop({
        type: String,
        enum: [...Object.values(System.ErrorNameType)],
    })
    name: System.ErrorNameType

    @Prop({
        type: String,
        enum: [...Object.values(System.InitiantType)],
    })
    initiant: System.InitiantType

    @Prop({ _id: false, type: DiagnosticDeviceSchema })
    device: DiagnosticDevice

    @Prop({ _id: false, type: DiagnosticMetaSchema })
    meta: DiagnosticMeta

    @Prop({ _id: false, type: DiagnosticInformationSchema })
    information: DiagnosticInformation

    @Prop({ _id: false, type: DiagnosticSystemSchema })
    system: DiagnosticSystem

    @Prop({ _id: false, type: DiagnosticUserSchema })
    user: DiagnosticUser
}

const DiagnosticSchema = SchemaFactory.createForClass(Diagnostic)

DiagnosticSchema.set('toJSON', {
    transform: function (_, doc) {
        delete doc.createdAt
        delete doc.updatedAt
        delete doc.__v

        return doc
    },
})

export { DiagnosticSchema }
