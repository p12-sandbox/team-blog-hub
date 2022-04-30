import { AppProps } from "next/app";
import Head from "next/head";
import { config } from "@site.config";
import { SiteHeader } from "@src/components/SiteHeader";
import { SiteFooter } from "@src/components/SiteFooter";
import { ThemeProvider } from 'next-themes';
import { ThemeChanger } from '@src/components/ThemeChanger';
import "@src/styles/globals.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="light">
      <Head>
        <link
          rel="icon shortcut"
          type="image/png"
          href={`${config.siteRoot}/logo.png`}
        />
        
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </ThemeProvider>
  );
}
