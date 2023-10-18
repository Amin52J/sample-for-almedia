import Redis from "ioredis";
import * as Sentry from "@sentry/nextjs";

const createRedisClient = async () => {
  const client = new Redis(process.env.NEXT_CACHE_REDIS_URL, {
    maxRetriesPerRequest: 2,
    showFriendlyErrorStack: process.env.NODE_ENV !== "production",
    lazyConnect: true,
  });

  // econnrefused generates an excessive amount of errors
  client.on("error", () => {
    return null;
  });

  try {
    await client.connect();
  } catch (error) {
    Sentry.captureException(error);
  }

  return client;
};

export default createRedisClient;
