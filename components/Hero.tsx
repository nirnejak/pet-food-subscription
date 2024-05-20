"use client"
import * as React from "react"
import { motion } from "framer-motion"

import Container from "./Container"

interface Props {}

const Hero: React.FC<Props> = () => {
  const [rotation, setRotation] = React.useState(0)
  const rotationFactor = 0.1

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    setRotation((scrollPosition * rotationFactor) % 360)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="bg-green-950 text-green-50 px-10 w-full">
      <Container className="mb-48 mt-28 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1, type: "spring" }}
          className="mb-6"
        >
          Real beef • Made fresh • Delivered
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, type: "spring" }}
          className="text-7xl font-semibold leading-tight mb-10"
        >
          A long life starts with the right food
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring" }}
          className="px-5 py-3 bg-orange-600 mb-10"
        >
          Start Today
        </motion.button>
        <motion.div
          initial={{ opacity: 0, translateY: 10 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="flex items-center justify-center gap-2"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.9147 11.1724C13.8579 11.1357 13.7922 11.115 13.7246 11.1124C13.657 11.1099 13.5899 11.1255 13.5305 11.1578C13.471 11.1901 13.4213 11.2378 13.3867 11.2959C13.352 11.354 13.3336 11.4203 13.3334 11.488V20.512C13.3339 20.6118 13.3737 20.7074 13.4443 20.778C13.5149 20.8486 13.6105 20.8884 13.7103 20.8889C13.783 20.8889 13.8541 20.8676 13.9147 20.8275L20.6836 16.3155C20.7361 16.2813 20.7792 16.2345 20.809 16.1794C20.8388 16.1243 20.8544 16.0626 20.8544 16C20.8544 15.9373 20.8388 15.8757 20.809 15.8206C20.7792 15.7655 20.7361 15.7187 20.6836 15.6844L13.9147 11.1724ZM30.2223 16C30.2223 23.8551 23.8552 30.2222 16.0001 30.2222C8.14494 30.2222 1.77783 23.8551 1.77783 16C1.77783 8.14488 8.14494 1.77777 16.0001 1.77777C19.772 1.77777 23.3895 3.27618 26.0567 5.94336C28.7239 8.61055 30.2223 12.228 30.2223 16ZM28.8889 16C28.8889 8.88177 23.1183 3.1111 16.0001 3.1111C8.88183 3.1111 3.11117 8.88177 3.11117 16C3.11117 23.1182 8.88183 28.8889 16.0001 28.8889C23.1147 28.8809 28.8809 23.1147 28.8889 16Z"
              fill="#B5D3BA"
            />
          </svg>
          <p>Watch Our Ad, “Forever”</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, translateY: "100%" }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.4, type: "spring" }}
          className="mt-20"
        >
          <div
            style={{
              transform: `rotate(${rotation}deg)`,
              transition: "transform 0.1s linear",
            }}
          >
            <img src="./Food.png" />
          </div>
        </motion.div>
      </Container>
    </div>
  )
}

export default Hero
