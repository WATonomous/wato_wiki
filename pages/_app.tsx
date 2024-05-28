import React from "react"

import "../styles/globals.css"

// This default export is required in a new `pages/_app.tsx` file.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}