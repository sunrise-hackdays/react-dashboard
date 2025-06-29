import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:title" content="React Dashboard Portfolio" />
        <meta property="og:description" content="通知・統計を備えたUIポートフォリオ" />
        <meta property="og:image" content="/ogp.png" />
        <meta property="og:url" content="https://react-dashboard-hazel-zeta.vercel.app/" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
