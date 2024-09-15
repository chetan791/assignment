"use client";

import "./globals.css";
import Link from "next/link";
import { ApolloProvider } from "@apollo/client";
import client from "./lib/apollo-client";
import { Provider } from "react-redux";
import store from "@/Redux/Store";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px",
            backgroundColor: "#00b386",
          }}
          className="flex flex-row justify-around text-2xl  py-4 align-items-center"
        >
          <Link
            href={"/"}
            className="flex flex-row align-items-center w-1/2 text-black"
          >
            Travi
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
            Go
          </Link>
          <div className="flex flex-row gap-4 align-items-center text-bold   justify-between text-sm text-black">
            <Link href="/hostels">Locations</Link>
            <Link href="/locationCount">Locations Count</Link>
            <Link href="/cart">cart</Link>
          </div>
        </nav>
        <Provider store={store}>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </Provider>
      </body>
    </html>
  );
}
