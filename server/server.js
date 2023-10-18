/* eslint-disable */
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const useragent = require("express-useragent");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const https = require("https");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";

const routes = require("./routes");
const { maxAge, port, secret } = require("./constants");

process.env.NODE_TLS_REJECT_UNAUTHORIZED = dev ? "0" : "1";

startWorker();

async function startWorker(id) {
  console.log(`Started worker`);
  process.on("SIGTERM", () => {
    console.log(`Worker ${id} exiting...`);
    process.exit();
  });

  const app = next({ dev, quiet: !dev, hostname: "localhost", port });
  const handle = app.getRequestHandler();

  await app.prepare();

  const server = express();
  server.use(compression());
  server.use(useragent.express());
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(
    session({
      secret,
      resave: false,
      saveUninitialized: true,
      cookie: { maxAge },
    }),
  );

  // Static files max age
  server.use(
    express.static("static", {
      maxAge: dev ? "0" : "30d",
    }),
  );

  routes(server, app, handle);

  const httpsServer = https.createServer(
    {
      key: fs.readFileSync("./config/certificates/localhost.key"),
      cert: fs.readFileSync("./config/certificates/localhost.crt"),
    },
    server,
  );

  httpsServer.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${port}`);
  });
}
