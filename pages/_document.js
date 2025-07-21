import Document, { Html, Head, Main, NextScript } from "next/document";
import { SITE_URL } from "../constants";
import { CssBaseline } from "@nextui-org/react";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => App,
        enhanceComponent: (Component) => Component,
      });

    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" itemScope itemType="http://schema.org/Organization">
        <Head>
          {/* reCAPTCHA script added below */}
          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>

          {/* Optional: Performance optimization */}
          <link rel="preconnect" href="https://www.google.com" />
          <link rel="preconnect" href="https://www.gstatic.com" />
          {/* ✅ Security */}
          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />

          {/* ✅ SEO / OpenGraph */}
          <meta name="robots" content="index, follow" />
          <meta property="og:url" content={SITE_URL} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Depfin Finance" />
          <meta
            name="title"
            content="Instant Business Loans Services South Africa | Personal Loans"
          />
          <meta
            name="keywords"
            content="Instant Business Loans Services, Business Loans Services, Personal Loans Services, Personal Loans Cape Town, Business Loans South Africa, Affordable Loans South Africa"
          />
          <meta
            name="description"
            content="Depfin Finance offers affordable personal & business loan services in Cape Town, South Africa. Our financial advisors are always ready to assist you. Apply today!"
          />

          {/* ✅ Google Verification */}
          <meta
            name="google-site-verification"
            content="o2c09wBxSEGBC_spdIgsJCtzSmxyeti2XTly5wM9pSc"
          />

          <link
            rel="preload"
            href="/fonts/Poppins-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin
          />
          <link
            rel="preload"
            href="/fonts/Poppins-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin
          />

          {/* ✅ Async Font Awesome load to avoid render-blocking */}
          <link
            rel="preload"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
            as="style"
            onLoad="this.onload=null;this.rel='stylesheet';"
            integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
            crossOrigin="anonymous"
          />
          <noscript>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
              integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
              crossOrigin="anonymous"
            />
          </noscript>

          <link
            rel="preload"
            as="image"
            href="/Images/ezgif.com-webp-to-jpg-converter (1) (1) (1).webp"
          />

          {/* ✅ Fonts Optimization */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />

          <link rel="preload" as="image" href="/Images/heroimg.webp" />

          {/* ✅ Inject NextUI styles */}
          {CssBaseline.flush()}
        </Head>

        <body>
          <Main />
          <NextScript />

          {/* ✅ GTM noscript fallback */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-N4LX88L"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
