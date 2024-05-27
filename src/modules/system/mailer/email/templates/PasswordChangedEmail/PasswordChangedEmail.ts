// Components
import { MainContainer } from '@/system/mailer/email/components/MainContainer/MainContainer'
import { Root } from '@/system/mailer/email/layout/Root/Root'

export function PasswordChangedEmail() {
    const inner = `
        <tr>
            <td class="padding-root">
                <table width="100%" style="border-spacing: 0" role="presentation">
                    <tr>
                        <td class="padding content padding-container" style="width:100%;text-align:left;font-size:20px;">
                            <p style="font-size:48px;line-height: 54px;font-weight: bold;">Password Changed</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="padded content padding-text-container" style="width:100%;text-align: left;">
                            <p style="font-size: 16px;line-height: 24px;">Your password has successfully changed as per your request.</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="padded content padding-text-container" style="width:100%;text-align: left;">
                            <p style="font-size: 16px;line-height: 24px;">We are committed to keeping your account secure so if you did not make this request please reply to this email.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `

    return Root({
        title: 'Password changed.',
        text: 'Your password has been successfully changed.',
        content: MainContainer(inner),
        footnote: 'You were sent this email because your password has recently been changed.',
    })
}
