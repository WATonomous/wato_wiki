import React from "react"
import Head from "next/head"

import "../styles/globals.css"

// This default export is required in a new `pages/_app.tsx` file.
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}