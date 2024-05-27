import { Root } from '@/modules/system/mailer/email/layout/Root/Root'

// Components
import { MainContainer } from '@/modules/system/mailer/email/components/MainContainer/MainContainer'
import { Button } from '@/modules/system/mailer/email/components/Button/Button'

export function VerificationEmail(code: number) {
    const inner = `
        <tr>
            <td class="padding-root">
                <table width="100%" style="border-spacing: 0" role="presentation">
                    <tr>
                        <td class="padding content padding-text-container" style="width:100%;text-align:left;font-size:20px;">
                            <p style="font-size:48px;line-height: 48px;font-weight: bold;">Confirm your email</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="padding content padding-text-container" style="width:100%;text-align:left;font-size:20px;">
                            <p style="font-size:38px;line-height: 44px;font-weight: bold;color:#434343;letter-spacing: 4px;">${code}</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="padded content padding-text-container" style="width:100%;text-align: left;">
                            <p style="font-size: 16px;line-height: 24px;">Thank you for creating an account on our platform, before you gain full access you will need to verify your account. Your verification code is listed above or, alternatively you can click the button below to verify.</p>
                        </td>
                    </tr>

                    <tr>
                        <td class="padding content padding-text-container" style="width:100%;text-align:left;font-size:20px;">
                            ${Button('Confirm Email')}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    `

    return Root({
        title: 'Verify your email.',
        text: `Your verification code is ${code}.`,
        content: MainContainer(inner),
        footnote: 'You were sent this email because you signed up for [company name]',
    })
}
