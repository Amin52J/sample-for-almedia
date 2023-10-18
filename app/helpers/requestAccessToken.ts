import axios from "axios";
import * as Sentry from "@sentry/nextjs";
import createRedisClient from "@Helpers/createRedisClient";

// cache expires 200s earlier than that of token
const EXPIRE_BEFORE = 200;

export const requestMiddlewareAccessToken = async () => {
  const { data: token } = await axios.post(
    `${window.location.origin}${process.env.NEXT_PUBLIC_BASE_PATH}/api/access-token`,
  );
  return token;
};

const requestAccessToken = async () => {
  let redisToken: string | null = null;

  const redisClient = await createRedisClient();

  try {
    redisToken = await redisClient.get("authAccessToken");
  } catch (error) {
    Sentry.captureException(error);
  }

  if (redisToken) return redisToken;

  const options = {
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_AUTH_URL}/oauth/token`,
    header: {
      "content-type": "application/x-www-form-urlencoded",
    },
    data: {
      /* eslint-disable @typescript-eslint/camelcase */
      grant_type: "client_credentials",
      client_id: `${process.env.NEXT_CLIENT_ID}`,
      client_secret: `${process.env.NEXT_CLIENT_SECRET}`,
    },
  };

  const data = await axios
    .request(options)
    .then((response) => response?.data)
    .catch((error) => console.error(error));

  const { access_token, expires_in } = data;
  const expiresIn = expires_in - EXPIRE_BEFORE;

  redisClient.setex("authAccessToken", expiresIn, access_token, (error) => {
    Sentry.captureException(error);
  });

  return access_token;
};

export default requestAccessToken;
