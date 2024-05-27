// Components
import { Button } from '@/system/mailer/email/components/Button/Button'
import { MainContainer } from '@/system/mailer/email/components/MainContainer/MainContainer'
import { Root } from '@/system/mailer/email/layout/Root/Root'

// Domain
import { User } from '@/domain/user/schema/user.schema'

export function ForgotPasswordEmail(user: User, token: string) {
    const inner = `
        <tr>
            <td style="padding-root">
                <table width="100%" style="border-spacing: 0" role="presentation">
                    <tr>
                        <td class="padding content padding-container" style="width:100%;text-align:left;font-size:20px;">
                            <p style="font-size:48px;line-height: 54px;font-weight: bold;">Recover your account</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="padded content padding-text-container" style="width:100%;text-align: left;">
                            <p style="font-size: 16px;line-height: 24px;">These things happen! Click the button below to begin the steps to recover your account. If you did not initiant this request please disregard this request. Token: ${token}. User: ${user._id}</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="padding content padding-text-container" style="width:100%;text-align:left;font-size:20px;">
                            ${Button('Recover Account')}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `

    return Root({
        title: 'Account Recovery Request.',
        text: 'We understand these things happen, let us help you get back into your account.',
        content: MainContainer(inner),
        footnote: 'You were sent this email because you requested a password reset from us.',
    })
}
