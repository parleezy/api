import { Request } from 'express'
import { Injectable } from '@nestjs/common'
import { Types } from 'mongoose'

// Data
import { System } from '@/models/system'

// Schema
import { Activity } from './schema/activity.schema'
import { User } from '@/domain/user/schema/user.schema'

@Injectable()
export class ActivityFactory {
    private build(dto: System.CreateActivityParams, req: Request): Activity {
        const activity = new Activity()

        activity.initiant = dto.initiant
        activity.name = dto.name

        activity.information = {
            description: dto.description,
            payload: dto.payload,
        }

        activity.user = {
            id: dto.id,
        }

        activity.device = this.generate.device(req)
        activity.meta = this.generate.meta(req)

        return activity
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

    get authentication() {
        return {
            login: (user: User, req: Request): Activity => {
                return this.build(
                    {
                        name: System.EventType.LOGIN,
                        initiant: System.InitiantType.USER,
                        description: System.ActivityDescription.LOGIN,
                        environment: process.env.APP_ENV || process.env.NODE_ENV,
                        payload: null,
                        id: user._id as unknown as Types.ObjectId,
                    },
                    req,
                )
            },
            signupWithEmail: (user: User, req: Request): Activity => {
                return this.build(
                    {
                        name: System.EventType.SIGNUP_WITH_EMAIL,
                        initiant: System.InitiantType.USER,
                        description: System.ActivityDescription.SIGNUP_WITH_EMAIL,
                        environment: process.env.APP_ENV || process.env.NODE_ENV,
                        payload: null,
                        id: user._id as unknown as Types.ObjectId,
                    },
                    req,
                )
            },
            recoverRequest: (user: User, req: Request): Activity => {
                return this.build(
                    {
                        name: System.EventType.FORGOT_PASSWORD_REQUEST,
                        initiant: System.InitiantType.USER,
                        description: System.ActivityDescription.RECOVER_ACCOUNT_EMAIL_REQUEST,
                        environment: process.env.APP_ENV || process.env.NODE_ENV,
                        payload: null,
                        id: user._id as unknown as Types.ObjectId,
                    },
                    req,
                )
            },
            resendVerification: (user: User, req: Request): Activity => {
                return this.build(
                    {
                        name: System.EventType.RESEND_EMAIL_VERIFICATION,
                        initiant: System.InitiantType.USER,
                        description: System.ActivityDescription.RESEND_EMAIL_VERIFICATION,
                        environment: process.env.APP_ENV || process.env.NODE_ENV,
                        payload: null,
                        id: user._id as unknown as Types.ObjectId,
                    },
                    req,
                )
            },
            verifyEmailCode: (user: User, req: Request): Activity => {
                return this.build(
                    {
                        name: System.EventType.VERIFIED_EMAIL_CODE,
                        initiant: System.InitiantType.USER,
                        description: System.ActivityDescription.VERIFIED_EMAIL_CODE,
                        environment: process.env.APP_ENV || process.env.NODE_ENV,
                        payload: null,
                        id: user._id as unknown as Types.ObjectId,
                    },
                    req,
                )
            },
            verifyEmailLink: (user: User, req: Request): Activity => {
                return this.build(
                    {
                        name: System.EventType.VERIFIED_EMAIL_LINK,
                        initiant: System.InitiantType.USER,
                        description: System.ActivityDescription.VERIFIED_EMAIL_LINK,
                        environment: process.env.APP_ENV || process.env.NODE_ENV,
                        payload: null,
                        id: user._id as unknown as Types.ObjectId,
                    },
                    req,
                )
            },
        }
    }
}
