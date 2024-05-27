export function MainContainer(children: string) {
    return `
        <div 
            style="
                max-width: 600px;
                background-color: #ffffff;
                border-radius: 16px;
                margin-left: 8px;
                margin-right: 8px;
                margin-top: 16px;
                margin-bottom: 16px;
            "
        >
            <!--[if (gte mso 9)|(IE)]>
                <table width="600" align="center" style="border-spacing:0;" role="presentation">
                    <tr>
                        <td 
                            style="
                                padding-top:0;
                                padding-right:0;
                                padding-bottom:0;
                                padding-left:0;
                            "
                        >
                        <![endif]-->

                            <table 
                                align="center" 
                                style="
                                    border-spacing:0;
                                    color: #000;
                                    font-family: 'Lato',sans-serif, Arial, Helvetica;
                                    background-color: #ffffff;
                                    Margin:0;
                                    padding-top: 0;
                                    padding-right: 0;
                                    padding-bottom: 0;
                                    padding-left: 0;
                                    width: 100%;
                                    max-width: 600px;
                                    border-radius: 16px;
                                " 
                                role="presentation"
                            >
                                ${children}
                            </table>

                        <!--[if (gte mso 9)|(IE)]>
                        </td>
                    </tr>
                </table>
            <![endif]-->
        </div>
    `
}
