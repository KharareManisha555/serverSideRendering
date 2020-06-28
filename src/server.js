import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import App from './App.js';
import fs from 'fs';
import {StaticRouter} from "react-router-dom";
// import Html from './client/Html';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet
const index = fs.readFileSync( '/home/mani/Documents/ReactApp/ssr/public/index.html', 'utf8');
const port = 3000;
const server = express();

// Creating a single index route to server our React application from.
server.get('*', (req, res) => {
  /**
   * This is where all the magic happens with Styled Components and
   * rendering our React application to string so we can insert it
   * into our HTML template to send to the client.
   */

   console.log('req======', req.url);
  const context = {};
  const sheet = new ServerStyleSheet();
  const body = renderToString(sheet.collectStyles(<StaticRouter location={req.url} context={context}><App /></StaticRouter>));
  const html = index.replace('<!------ APP ------->', body);
  res.send(html);
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);




// import http from "http";
// import React from "react";
// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router-dom";

// import App from "./App.js";

// http
//   .createServer((req, res) => {
//     const context = {};

//     const html = ReactDOMServer.renderToString(
//       <StaticRouter location={req.url} context={context}>
//         <App />
//       </StaticRouter>
//     );

//     if (context.url) {
//       res.writeHead(301, {
//         Location: context.url
//       });
//       res.end();
//     } else {
//       res.write(`
//       <!doctype html>
//       <div id="app">${html}</div>
//     `);
//       res.end();
//     }
//   })
//   .listen(3000);