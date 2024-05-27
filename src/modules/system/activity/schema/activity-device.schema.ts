import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose'

@Schema()
export class ActivityDevice {
    // Device
    @Prop({ type: Boolean })
    isMobile: boolean

    @Prop({ type: Boolean })
    isMobileNative: boolean

    @Prop({ type: Boolean })
    isTablet: boolean

    @Prop({ type: Boolean })
    isDesktop: boolean

    @Prop({ type: Boolean })
    isSmartTV: boolean

    // IPhone
    @Prop({ type: Boolean })
    isiPad: boolean

    @Prop({ type: Boolean })
    isiPod: boolean

    @Prop({ type: Boolean })
    isiPhone: boolean

    // Android
    @Prop({ type: Boolean })
    isAndroid: boolean

    @Prop({ type: Boolean })
    isAndroidTablet: boolean

    // Blackberry
    @Prop({ type: Boolean })
    isBlackberry: boolean

    // Browsers
    @Prop({ type: Boolean })
    isOpera: boolean

    @Prop({ type: Boolean })
    isIE: boolean

    @Prop({ type: Boolean })
    isEdge: boolean

    @Prop({ type: Boolean })
    isSafari: boolean

    @Prop({ type: Boolean })
    isFirefox: boolean

    @Prop({ type: Boolean })
    isWebkit: boolean

    @Prop({ type: Boolean })
    isChrome: boolean

    // OS
    @Prop({ type: Boolean })
    isWindows: boolean

    @Prop({ type: Boolean })
    isMac: boolean

    @Prop({ type: Boolean })
    isChromeOS: boolean

    @Prop({ type: Boolean })
    isSamsung: boolean
}

export const ActivityDeviceSchema = SchemaFactory.createForClass(ActivityDevice)
