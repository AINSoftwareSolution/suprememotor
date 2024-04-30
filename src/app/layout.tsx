import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import ScrollToTopButton from "./layout/scrollToTop";
import StoreProvider from "./storeProvider";
import BookAppointment from "./component/bookApointment";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Supreme Motor Company - Car repair in Pune",
  keywords: 'car mechanic in pune , car repair in pune , car garage in pune , automative shop in pune,  service, car,paint, jobs, interior, isurance, body-shop, custom paint, book apointment, experties meet, paint jobs, cashless insurace',
  description: "Welcome to Supreme Motor Company, your ultimate destination for car restoration and custom paint jobs in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="canonical"
          href="https://suprememotor.in/services"
          key="canonical"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <StoreProvider>
          <Header />
          {children}
          <ScrollToTopButton />
          <Footer />
          <BookAppointment />
          <GoogleAnalytics gaId="G-XYZ" />
        </StoreProvider>
      </body>
    </html>
  );
}
