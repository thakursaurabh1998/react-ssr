import express from "express";
import cors from "cors";
import { renderToString } from "react-dom/server";
import App from "../shared/App";
import React from "react";
import serialize from "serialize-javascript";
import { fetchPopularRepos } from "../shared/api";
import { matchPath } from "react-router-dom";
import routes from "../shared/routes";
import NotFound from "../shared/NotFound";

const app = express();

app.use(cors());

app.use(express.static("public"));

app.get("*", (req, res, next) => {
  const acitveRoute = routes.find(route => matchPath(req.url, route)) || {
    path: "/404",
    component: NotFound
  };

  const promise = activeRoute.fetchInitialData(req.path);
  promise.

  fetchPopularRepos().then(data => {
    const markup = renderToString(<App data={data} />);

    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
    <title>SSR with react</title>
    <script src='/bundle.js' defer></script>
    <script>window.__INITIAL_DATA__=${serialize(data)}</script>
    </head>
    
    <body>
    <div id='app'>${markup}</div>
    </body>
    </html>
    `);
  });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is up on port: ${port}`);
});
