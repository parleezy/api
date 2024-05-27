export function Head(title: string) {
    return `
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta name="color-scheme" content="light">
            <meta name="supported-color-schemes" content="light">
            <title>${title}</title>
            <style type="text/css">
                @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap');

                table {
                    border-spacing: 0;
                }

                td {
                    padding: 0;
                }

                p {
                    font-size: 15px;
                    margin: 0;
                }

                img {
                    border: 0;
                    border-width:0;
                }

                a {
                    text-decoration: none;
                }

                .center-padding {
                    padding-top: 20px!important;
                    padding-bottom: 40px!important;
                }

                .padding-container {
                    padding-top: 20px!important;
                    padding-bottom: 20px!important;
                    padding-right: 40px!important;
                    padding-left: 40px!important;
                }

                .padding-root {
                    padding-top: 40px!important;
                    padding-bottom: 40px!important;
                    padding-right: 0!important;
                    padding-left: 0!important;
                }

                .padding-text-container {
                    padding-top: 10px!important;
                    padding-right: 40px!important;
                    padding-bottom: 10px!important;
                    padding-left: 40px!important;
                }

                @media screen and (max-width: 599.98px) { 
                    .px-600-0 {
                        padding-left: 0!important;
                        padding-right: 0!important;
                    }

                    .pt-600-0 {
                        padding-top: 0!important;
                    }

                    img.third-img-last {
                        width: 200px!important;
                        max-width: 200px!important;
                    }

                    .d-600-none {
                        display: none!important;
                    }

                    .pr-large {
                        padding-right: 140px!important;
                    }

                    .center-text-mobile {
                        text-align: center!important;
                    }
                }

                @media screen and (max-width: 549.98px) { 
                    .pt-550-0 {
                        padding-top: 0!important;
                    }

                    .pr-large {
                        padding-right: 100px!important;
                    }
                }

                @media screen and (max-width: 499.98px) { 
                    .pt-500-0 {
                        padding-top: 0!important;
                    }

                    .pr-large {
                        padding-right: 60px!important;
                    }

                    .padding-container {
                        padding-top: 20px!important;
                        padding-bottom: 20px!important;
                        padding-right: 20px!important;
                        padding-left: 20px!important;
                    }

                    .padding-root {
                        padding-top: 20px!important;
                        padding-bottom: 20px!important;
                        padding-right: 0!important;
                        padding-left: 0!important;
                    }

                    .padding-text-container {
                        padding-top: 12px!important;
                        padding-right: 24px!important;
                        padding-bottom: 12px!important;
                        padding-left: 24px!important;
                    }
                }

                @media screen and (max-width: 399.98px) {
                    .banner {
                        height: auto!important;
                        padding-top: 20px!important;
                        padding-bottom: 30px!important;
                    }

                    .px-sm-0 {
                        padding-left: 0!important;
                        padding-right: 0!important;
                    }

                    .pt-400-0 {
                        padding-top: 0!important;
                    }

                    img.third-img {
                        width: 200px!important;
                        max-width: 200px!important;
                    }

                    .pr-large {
                        padding-right: 25px!important;
                    }
                }
            </style>

            <!--[if (gte mso 9)|(IE)]>
                <style type="text/css">
                    table {border-collapse: collapse !important;}
                </style>
            <![endif]-->
        </head>
    `
}
