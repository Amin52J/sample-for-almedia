import { useEffect, useState } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import createApolloClient from "@Helpers/createApolloClient";

const useClient = (uri: string) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>(
    null,
  );

  useEffect(() => {
    createApolloClient(uri).then((newClient) => {
      setClient(newClient);
    });
  }, [uri]);

  return client;
};

export default useClient;
