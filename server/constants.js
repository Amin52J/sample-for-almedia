const daysMaxAge = 7;
const maxAge = daysMaxAge * 24 * 60 * 60; // 7 days in ms

module.exports = {
  daysMaxAge,
  maxAge,
  port: 8081,
  secret: "Aroundhome",
};
