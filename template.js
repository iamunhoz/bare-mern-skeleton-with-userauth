export default () => {
    return `
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="Content-Security-Policy" content="default-src *; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'; img-src * data: 'unsafe-inline'; connect-src * 'unsafe-inline'; frame-src *;" />
            <title> MERN from scrath </title>
        </head>
        <body>
            <div id="root"></div>
            <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
    </html>

    `
}