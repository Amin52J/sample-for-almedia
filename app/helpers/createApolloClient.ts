import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import requestAccessToken, {
  requestMiddlewareAccessToken,
} from "@Helpers/requestAccessToken";

const createApolloClient = async (uri: string) => {
  const authLink: any = () =>
    setContext(async (_, { headers }) => {
      let token = "";
      if (typeof window !== "undefined" && window) {
        token = await requestMiddlewareAccessToken();
      } else {
        token = await requestAccessToken();
      }
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      };
    });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach((error) => {
        const { message, locations, path } = error;
        // eslint-disable-next-line no-console
        console.error(
          `GraphQL Error: ${message} Path: ${path} Location: ${locations}`,
        );
      });
    }
    if (networkError) {
      // eslint-disable-next-line no-console
      console.error(`Network Error: ${networkError}`);
    }
  });

  const dataLink = new HttpLink({
    uri,
  });

  const links = ApolloLink.from([authLink(), errorLink, dataLink]);
  const cache = new InMemoryCache();

  return new ApolloClient({
    link: links,
    cache,
    ssrMode: typeof window === "undefined",
    headers: {
      "content-type": "application/json",
    },
    connectToDevTools: true,
  });
};

export default createApolloClient;
