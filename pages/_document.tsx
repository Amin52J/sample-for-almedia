import React, { Fragment } from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import md5 from "md5";
import { StyleRegistry, useStyleRegistry } from "styled-jsx";

const preconnectUrls: string[] = [
  "https://fonts.googleapis.com",
  "https://app.usercentrics.eu",
  "https://cloudstatic.obi4wan.com",
];

const Styles = () => {
  const registry = useStyleRegistry();
  const styles = registry.styles();
  return <>{styles}</>;
};

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet: ServerStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => ({
            ...sheet.collectStyles(<App {...props} />),
          }),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: <Fragment>{sheet.getStyleElement()}</Fragment>,
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <StyleRegistry>
        <Html lang="de" dir="ltr" id="override-font-size">
          <Head>
            <meta
              name="google-site-verification"
              content="ZvU46zv0T7ZDYh6pgpN89DSSPj0Y8oqzKxXjlp7U4qs"
            />
            {preconnectUrls.map((url) => (
              <link
                key={`preconnected_${md5(url)}`}
                rel="preconnect"
                href={url}
              />
            ))}
            <link
              href="https://fonts.googleapis.com/css?family=Roboto:400,500"
              rel="stylesheet"
            />
            <script
              id="usercentrics-cmp"
              src="https://app.usercentrics.eu/browser-ui/latest/loader.js"
              data-settings-id="QbxscVYVd"
              type="application/javascript"
              async
            />
            <Styles />
          </Head>
          <body>
            <Main />
            <NextScript />
            <script
              id="obi-chat-launcher"
              src="https://cloudstatic.obi4wan.com/chat/obi-launcher.js"
              data-guid="f63572a6-393e-4192-aaa3-12f1c866a76b"
            />
          </body>
        </Html>
      </StyleRegistry>
    );
  }
}

export default MyDocument;
