import * as React from "react"
import type { Viewport } from "next"
import { Inter } from "next/font/google"

import classNames from "utils/classNames"
import Header from "components/Header"

import "../styles/main.css"

const sansFont = Inter({
  variable: "--sans-font",
  subsets: ["latin"],
})

export const viewport: Viewport = {
  themeColor: "#000000",
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="en">
      <head></head>

      <body
        className={classNames(
          sansFont.variable,
          "overflow-x-hidden bg-amber-50 font-sans"
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
