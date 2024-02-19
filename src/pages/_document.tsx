import { Html, Head, Main, NextScript } from "next/document";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/theme-toggle";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col m-4">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
