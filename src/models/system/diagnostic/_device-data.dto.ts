import { IsBoolean, IsOptional } from 'class-validator'

export class DeviceDataParams {
    /**
     * Device
     */
    @IsBoolean()
    @IsOptional()
    isMobile: boolean

    @IsBoolean()
    @IsOptional()
    isMobileNative: boolean

    @IsBoolean()
    @IsOptional()
    isTablet: boolean

    @IsBoolean()
    @IsOptional()
    isDesktop: boolean

    @IsBoolean()
    @IsOptional()
    isSmartTV: boolean

    @IsBoolean()
    @IsOptional()
    isiPad: boolean

    @IsBoolean()
    @IsOptional()
    isiPod: boolean

    @IsBoolean()
    @IsOptional()
    isiPhone: boolean

    @IsBoolean()
    @IsOptional()
    isAndroid: boolean

    @IsBoolean()
    @IsOptional()
    isAndroidTablet: boolean

    @IsBoolean()
    @IsOptional()
    isBlackberry: boolean

    @IsBoolean()
    @IsOptional()
    isOpera: boolean

    @IsBoolean()
    @IsOptional()
    isIE: boolean

    @IsBoolean()
    @IsOptional()
    isEdge: boolean

    @IsBoolean()
    @IsOptional()
    isSafari: boolean

    @IsBoolean()
    @IsOptional()
    isFirefox: boolean

    @IsBoolean()
    @IsOptional()
    isWebkit: boolean

    @IsBoolean()
    @IsOptional()
    isChrome: boolean

    @IsBoolean()
    @IsOptional()
    isWindows: boolean

    @IsBoolean()
    @IsOptional()
    isMac: boolean

    @IsBoolean()
    @IsOptional()
    isChromeOS: boolean

    @IsBoolean()
    @IsOptional()
    isSamsung: boolean
}
