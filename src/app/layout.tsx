import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/header";
import Footer from "./layout/footer";
import ScrollToTopButton from "./layout/scrollToTop";
import StoreProvider from "./storeProvider";
import BookAppointment from "./component/bookApointment";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Supreme Motor Company - Car Repair and Mechanic Services in Pune, India",
  keywords:
    "car mechanic near me, car repair near me, car mechanic in pune, car repair services in pune, auto shop near me, mechanic shop near me, service, car, paint, jobs, interior, insurance, body shop, custom paint, book appointment, expertise meet, paint jobs, car repair shop near me, cashless insurance",
  description:
    "Welcome to Supreme Motor Company, your ultimate destination for car repair, mechanic services and  custom paint jobs in Pune, India. We offer best automotive services like Ceranic and Graphene coating, Paint Protection Films, Body-shop(Denting and painting), Detaking and Interior Cleaning, Wrap jobs and Interior Modification. We provide Cashless Insurance",
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
