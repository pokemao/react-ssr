import React from 'react'

import {renderToString} from 'react-dom/server'

import express from 'express'

import App from '../src/app'

const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
    const content = renderToString(App)

    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script defer src="/bundle.js"></script>
            <title>Document</title>
        </head>
        <body>
            <div id="root">${content}</div>
        </body>
        </html>
    `)
})

app.listen('9093', () => {
    console.log('listening...');
    
})
