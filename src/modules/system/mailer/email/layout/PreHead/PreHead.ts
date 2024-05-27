export function PreHead(text: string) {
    return `        
        <!--[if (gte mso 9)|(IE)]>
            <style type="text/css">
                body {background-color: #f8f8f8!important;}
                body, table, td, p, a {font-family: sans-serif, Arial, Helvetica!important;}
            </style>
        <![endif]-->
        <div style="font-size: 0px;color: #f8f8f8!important;line-height: 1px;mso-line-height-rule:exactly;display: none;max-width: 0px;max-height: 0px;opacity: 0;overflow: hidden;mso-hide:all;">
            ${text}
        </div>
    `
}
