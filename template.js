export default () => {
    return `
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="Content-Security-Policy" content="default-src *; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'; img-src * data: 'unsafe-inline'; connect-src * 'unsafe-inline'; frame-src *;" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:100,300,400">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <title> MERN from scrath </title>
        </head>
        <body>
            <div id="root"></div>
            <script type="text/javascript" src="/dist/bundle.js"></script>
        </body>
    </html>

    `
}