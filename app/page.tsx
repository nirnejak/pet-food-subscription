import * as React from "react"
import { type Metadata } from "next"

import generateMetadata from "utils/seo"
import Hero from "components/Hero"

export const metadata: Metadata = generateMetadata({
  path: "/",
  title: "Pet Food Subscription",
  description: "Next.js Typescript Starter",
})

const Home: React.FC = () => {
  return (
    <main className="flex">
      <Hero />
    </main>
  )
}

export default Home
