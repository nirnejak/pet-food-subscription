"use client"
import * as React from "react"

import { useInView } from "react-intersection-observer"
import { motion, useAnimation } from "framer-motion"

import Container from "./Container"

interface Props {}

const About: React.FC<Props> = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start("visible").catch((err) => {
        console.log(err)
      })
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, translateY: 10 },
    visible: { opacity: 1, translateY: 0 },
  }

  return (
    <div ref={ref}>
      <Container size="wide" className="text-green-950">
        <div className="text-center">
          <motion.h2
            initial={"hidden"}
            animate={controls}
            variants={variants}
            transition={{ duration: 1, delay: 0.6, type: "spring" }}
            className="text-4xl mt-32 mb-6 font-semibold"
          >
            You shouldn’t be the only one eating healthy.
          </motion.h2>
          <Container>
            <motion.p
              initial={"hidden"}
              animate={controls}
              variants={variants}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className="mb-20 text-amber-700"
            >
              Like you, we love our pets and care about their health. That’s why
              we created The Farmer’s Dog — a service that delivers balanced,
              freshly made pet food with simple recipes, guided by science, and
              driven by love.
            </motion.p>
          </Container>
          <motion.div
            initial={"hidden"}
            animate={controls}
            variants={variants}
            transition={{ duration: 1, delay: 1, type: "spring" }}
            className="flex justify-center mb-40"
          >
            <img src="./ingredients.png" />
          </motion.div>
        </div>
      </Container>
    </div>
  )
}

export default About
