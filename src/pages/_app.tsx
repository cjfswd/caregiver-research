import { ModeToggle } from "@/components/theme-toggle";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { trpc } from '@/utils/trpc';
import { ResearchRouteProvider } from "@/utils/research-context";
import { ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <ResearchRouteProvider>
      {getLayout(<Component {...pageProps} />)}
    </ResearchRouteProvider>
  </ThemeProvider>;
}

export default trpc.withTRPC(App);