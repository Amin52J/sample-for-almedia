import React, { ReactElement, ReactNode, useEffect } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import * as localforage from "localforage";
import { SSRProvider } from "@react-aria/ssr";
import Theming from "@aroundhome/around-kit/theme/Theming";
import Footer from "@aroundhome/around-kit/components/Footer";
import Error from "@Modules/Error";
import MediaContextProvider from "@Shared/stores/MediaContext/MediaContextProvider";
import GAContextProvider from "@Shared/stores/GAContext/GAContextProvider";
import HeaderWithBack from "@Modules/HeaderWithBack";
import GlobalStyles from "@Shared/data/globalStyles";
import useGATracking from "@Hooks/useGATracking";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  status: number;
};

if (typeof window !== "undefined") {
  localforage.config({ name: "aroundhome", storeName: "partner-profile-ui" });
}

function App({ Component, pageProps, status }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const profile = pageProps?.profile || {};
  const { vendorUuid = null, slug = null } = profile;
  const { asPath } = useRouter();
  const { initializeGATracker, gaConsentStatus } = useGATracking({
    vendorUuid,
    slug,
  });

  useEffect(() => {
    if (gaConsentStatus) {
      initializeGATracker();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath, vendorUuid, gaConsentStatus]);

  return (
    <MediaContextProvider>
      <GAContextProvider profile={profile}>
        <>
          <Head>
            <title>Aroundhome</title>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
          </Head>
          <Theming>
            <GlobalStyles />
            <Error status={status}>
              <SSRProvider>
                <HeaderWithBack />
                {getLayout(<Component {...pageProps} />)}
                <Footer />
              </SSRProvider>
            </Error>
          </Theming>
        </>
      </GAContextProvider>
    </MediaContextProvider>
  );
}

export default App;
