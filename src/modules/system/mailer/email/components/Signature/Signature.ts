export function Signature(footnote: string) {
    return `
        <tr>
            <td style="padding-top:0px;padding-right:0;padding-bottom:0px;padding-left:0;">
                <table width="100%" style="border-spacing:0;" role="presentation">

                    <tr>
                        <td style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;">
                            <table width="100%" style="border-spacing:0;" role="presentation">
                                <tr>
                                    <td class="padding content" style="
                                        font-size: 16px;
                                        padding-top: 20px;
                                        padding-right: 20px;
                                        padding-bottom: 20px;
                                        padding-left: 20px;
                                        width: 100%;
                                        text-align: center; 
                                        width: 600px;
                                    ">
                                        <!-- Social Links here -->
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr>
                        <td style="padding-top:10px;padding-bottom:10px;width:100%;width:600px;text-align:center;">
                            <p style="font-size: 12px;padding-right: 20px;padding-left: 20px;line-height: 16px;color: #7a7d85">This email was sent to you by [Company Name].</p>
                            <p style="font-size: 12px;padding-right: 20px;padding-left: 20px;line-height: 16px;color: #7a7d85">${footnote}</p>
                            <p style="font-size: 12px;padding-right: 20px;padding-left: 20px;line-height: 16px;color: #7a7d85; padding-top: 5px;">CODESZN FZCO &copy;${new Date().getFullYear()}.</p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    `
}
