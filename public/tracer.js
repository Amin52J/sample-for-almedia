const tracer = require("dd-trace");

tracer.init({
  service: "partner-profile-ui",
  env: process.env.DATADOG_ENVIRONMENT,
  hostname: process.env.DATADOG_HOST,
  port: process.env.DATADOG_PORT,
  enabled: process.env.DATADOG_ENABLED === "true",
  plugins: true,
});

tracer.use("ioredis", {
  service: "partner-profile-ui-redis",
});
