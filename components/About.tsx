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

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  return (
    <div ref={ref}>
      <Container size="wide" className="text-green-950">
        <div className="text-center">
          <motion.h2
            initial={"hidden"}
            animate={controls}
            variants={variants}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-4xl mt-32 mb-6 font-semibold"
          >
            You shouldn’t be the only one eating healthy.
          </motion.h2>
          <Container>
            <motion.p
              initial={"hidden"}
              animate={controls}
              variants={variants}
              transition={{ duration: 1, delay: 0.4, type: "spring" }}
              className="mb-32 text-amber-700"
            >
              Like you, we love our pets and care about their health. That’s why
              we created The Farmer’s Dog — a service that delivers balanced,
              freshly made pet food with simple recipes, guided by science, and
              driven by love.
            </motion.p>
          </Container>
          <div className="relative">
            <motion.div
              initial={"hidden"}
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className="absolute top-10 mr-30 flex text-left gap-4"
            >
              <div>
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="44"
                    height="44"
                    transform="translate(0 0.0800171)"
                    fill="url(#pattern0_14_448)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_14_448"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use href="#image0_14_448" transform="scale(0.005)" />
                    </pattern>
                    <image
                      id="image0_14_448"
                      width="200"
                      height="200"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Real Food</p>
                <p className="text-amber-700 max-w-[150px] text-sm">
                  Human-grade meat and veggies in simple recipes, made for dogs
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={"hidden"}
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className="absolute flex top-10 right-0 text-left gap-4"
            >
              <div>
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="44"
                    height="44"
                    transform="translate(0 0.0799866)"
                    fill="url(#pattern0_14_468)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_14_468"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use href="#image0_14_468" transform="scale(0.005)" />
                    </pattern>
                    <image
                      id="image0_14_468"
                      width="200"
                      height="200"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Made Fresh</p>
                <p className="text-amber-700 max-w-[150px] text-sm">
                  Maintain whole food and nutritional integrity
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={"hidden"}
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className="absolute flex bottom-0 left-0 text-left gap-4"
            >
              <div>
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="44"
                    height="44"
                    transform="translate(0 0.0800171)"
                    fill="url(#pattern0_14_455)"
                  />
                  <defs>
                    <pattern
                      id="pattern0_14_455"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use href="#image0_14_455" transform="scale(0.005)" />
                    </pattern>
                    <image
                      id="image0_14_455"
                      width="200"
                      height="200"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Human Grade</p>
                <p className="text-amber-700 max-w-[150px] text-sm">
                  Safety and quality never before available to pets
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={"hidden"}
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 1, delay: 0.8, type: "spring" }}
              className="absolute flex bottom-0 right-0 text-left gap-4"
            >
              <div>
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="44" height="44" fill="url(#pattern0_14_475)" />
                  <defs>
                    <pattern
                      id="pattern0_14_475"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use href="#image0_14_475" transform="scale(0.005)" />
                    </pattern>
                    <image
                      id="image0_14_475"
                      width="200"
                      height="200"
                      href="data:image/png;base64,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"
                    />
                  </defs>
                </svg>
              </div>
              <div>
                <p className="font-semibold">Vet Developed</p>
                <p className="text-amber-700 max-w-[150px] text-sm">
                  Nutrition that exceeds industry standards (AAFCO)
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={"hidden"}
              animate={controls}
              variants={imageVariants}
              transition={{ duration: 1, delay: 0.6, type: "spring" }}
              className="flex justify-center mb-40"
            >
              <img src="./ingredients.png" />
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About
