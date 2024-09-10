import React from 'react'

import {renderToString} from 'react-dom/server'

import express from 'express'

import createFetchRequest from './request'

import routes from '../src/router/router'

const {
    createStaticHandler,
    createStaticRouter,
    StaticRouterProvider,
  } = require("react-router-dom/server");


const app = express()

let handler = createStaticHandler(routes);

app.use(express.static('public'))

app.get('*', async (req, res) => {
    let fetchRequest = createFetchRequest(req, res);
    let context = await handler.query(fetchRequest);

    let router = createStaticRouter(
        handler.dataRoutes,
        context
      );
    //   let html = renderToString(
    //     <StaticRouterProvider
    //       router={router}
    //       context={context}
    //     />
    //   );

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
            <div id="root">nihao</div>
        </body>
        </html>
    `)
})

app.listen('9093', () => {
    console.log('listening...');
    
})
