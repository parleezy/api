import { Injectable } from '@nestjs/common'
import { Request } from 'express'

// Schema
import { Diagnostic } from './schema/diagnostic.schema'

// Data
import { System } from '@/models/system'
import { Core } from '@/models/core'

@Injectable()
export class DiagnosticFactory {
    private build(dto: System.CreateDiagnosticParams, req: Request): Diagnostic {
        const diagnostic = new Diagnostic()

        diagnostic.initiant = dto.initiant
        diagnostic.name = dto.name

        diagnostic.information = {
            details: dto.details,
            message: dto.message,
            status: dto.status,
            payload: dto.payload,
        }

        diagnostic.system = {
            environment: dto.environment,
            service: dto.service,
        }

        diagnostic.user = {
            id: dto.id,
        }

        diagnostic.device = this.generate.device(req)
        diagnostic.meta = this.generate.meta(req)

        return diagnostic
    }

    private get generate() {
        return {
            device: (req: Request): System.DeviceDataParams => {
                const userAgent = req.useragent

                return {
                    // Device
                    isMobile: userAgent.isMobile,
                    isMobileNative: userAgent.isMobileNative,
                    isTablet: userAgent.isTablet,
                    isDesktop: userAgent.isDesktop,
                    isSmartTV: userAgent.isSmartTV,

                    // Apple
                    isiPad: userAgent.isiPad,
                    isiPod: userAgent.isiPod,
                    isiPhone: userAgent.isiPhone,

                    // Android
                    isAndroid: userAgent.isAndroid,
                    isAndroidTablet: userAgent.isAndroidTablet,

                    // Blackberry
                    isBlackberry: userAgent.isBlackberry,

                    // Browsers
                    isOpera: userAgent.isOpera,
                    isIE: userAgent.isIE,
                    isEdge: userAgent.isEdge,
                    isSafari: userAgent.isSafari,
                    isFirefox: userAgent.isFirefox,
                    isWebkit: userAgent.isWebkit,
                    isChrome: userAgent.isChrome,

                    // OS
                    isWindows: userAgent.isWindows,
                    isMac: userAgent.isMac,
                    isChromeOS: userAgent.isChromeOS,
                    isSamsung: userAgent.isSamsung,
                }
            },
            meta: (req: Request): System.RequestMetaParams => {
                const userAgent = req.useragent

                return {
                    ip: req.ipAddress,
                    browser: userAgent.browser,
                    version: userAgent.version,
                    os: userAgent.os,
                    platform: userAgent.platform,
                    source: userAgent.source,
                }
            },
        }
    }

    get create() {
        return {
            signupError: (payload: Core.EmailSignupParams, req: Request): Diagnostic => {
                return this.build(
                    {
                        name: System.ErrorNameType.SIGNUP_ATTEMPT_WITH_EXISTING_EMAIL,
                        initiant: System.InitiantType.USER,
                        details: ['A user with this email already exists'],
                        message: System.DiagnosticMessage.SIGNUP_EMAIL_EXISTS_ERROR,
                        status: 409,
                        environment: process.env.APP_ENV || process.env.NODE_ENV,
                        service: System.ServiceType.AUTHENTICATION,
                        payload: {
                            email: payload.email,
                        },
                        id: null,
                    },
                    req,
                )
            },
        }
    }
}
