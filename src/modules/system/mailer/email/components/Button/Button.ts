export function Button(text: string) {
    return `

            <table style="border-collapse: collapse; line-height: 100%; box-sizing: border-box; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation" cellspacing="0" cellpadding="0" border="0">
                <tbody style="box-sizing: border-box;">
                    <tr style="box-sizing: border-box;">
                        <td valign="middle" style="border: none; border-radius: 100px; cursor: auto; height: 52px; mso-padding-alt: 10px 32px; background: #000000; box-sizing: border-box; border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt;" role="presentation" bgcolor="#000000" align="center">
                            <a target="_blank" style="display: inline-block; background: #000000; color: #FFFFFF; font-size: 16px; font-weight: 700; line-height: 120%; margin: 0; text-decoration: none; text-transform: none; padding: 10px 32px; mso-padding-alt: 0px; border-radius: 100px; box-sizing: border-box;" href="TODO">${text}</a>
                        </td>
                    </tr>
                </tbody>
            </table>
    `
}
