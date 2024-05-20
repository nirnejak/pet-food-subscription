import * as React from "react"
import { type Metadata } from "next"

import generateMetadata from "utils/seo"
import Hero from "components/Hero"
import About from "components/About"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Pet Food Subscription",
  description: "Next.js Typescript Starter",
})

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <About />
    </main>
  )
}

export default Home
