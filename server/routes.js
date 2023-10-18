const url = require("url");

const createRoutes = (server, app, handle) => {
  server.post("*", (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    return handle(req, res, parsedUrl);
  });

  server.get("*", (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    return handle(req, res, parsedUrl);
  });
};

module.exports = createRoutes;
