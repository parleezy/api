// Layout
import { Head } from '@/modules/system/mailer/email/layout/Head/Head'
import { PreHead } from '@/modules/system/mailer/email/layout/PreHead/PreHead'

// Components
import { Signature } from '@/modules/system/mailer/email/components/Signature/Signature'

interface Props {
    title: string
    text: string
    content: string
    footnote: string
}

export function Root({ title, text, content, footnote }: Props) {
    return `
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html xmlns="http://www.w3.org/1999/xhtml" lang="en">
            ${Head(title)}
            <body style="
                Margin:0;
                min-width:100%;
                background-color: #f8f8f8;
            ">
                ${PreHead(text)}
                
                <center 
                    class="center-padding" 
                    style="
                        width: 100%;
                        table-layout:fixed;
                        background-color: #f8f8f8;
                    ">                    
                    ${content}
                    ${Signature(footnote)}
                </center>
            </body>
        </html>
    `
}
