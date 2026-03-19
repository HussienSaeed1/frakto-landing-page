"use client";

import { IntlProvider as NextIntlProvider } from "next-intl";
import {ThemeProvider} from "@/src/context/ThemeProvider";
import {LanguageProvider} from "@/src/context/LanguageProvider";
// import Navbar from "@/src/components/Navbar";
// import Footer from "@/src/components/Footer";
// import BackToTop from "@/src/components/BackToTop";
import ReactQueryProvider from "../QueryProvider";
import Navbar from "@/src/components/Navbar";

export default function Providers({ children, locale, messages }) {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <LanguageProvider>
          <NextIntlProvider locale={locale} messages={messages}>
           <Navbar />
            {children}
            {/* <BackToTop /> */}
         
          </NextIntlProvider>
        </LanguageProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
