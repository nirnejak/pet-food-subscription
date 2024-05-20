"use client"
import * as React from "react"
import { motion } from "framer-motion"

import Logo from "./Logo"
import { ThreeLineHorizontal } from "akar-icons"

interface Props {}

const linkClassName =
  "py-4 px-4 hover:bg-green-200 cursor-pointer transition-all bg-green-50"

const Header: React.FC<Props> = () => {
  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-100%" }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 1, delay: 1.4, type: "spring" }}
      className="fixed w-full top-4 px-4 z-max"
    >
      <div className="flex rounded-lg bg-green-50 overflow-hidden shadow-2xl">
        <div className="flex items-center">
          <Logo />
          <div>
            <p className="text-gray-700 font-semibold leading-tight">
              Fresh & Raw Beef for Dogs
            </p>
            <p className="text-xs text-slate-400 leading-none">
              By <span className="font-semibold">CrudoPerro.com</span>
            </p>
          </div>
        </div>
        <nav className="hidden md:flex items-center ml-6 text-sm text-gray-700">
          <a href="" className={linkClassName}>
            Home
          </a>
          <a href="" className={linkClassName}>
            Dogs 🐶
          </a>
          <a href="" className={linkClassName}>
            Cats 🐱
          </a>
          <a href="" className={linkClassName}>
            Calculator
          </a>
          <a href="" className={linkClassName}>
            Why Raw Food?
          </a>
          <a href="" className={linkClassName}>
            About us
          </a>
          <a href="" className={linkClassName}>
            FAQ
          </a>
          <a href="" className={linkClassName}>
            Contact
          </a>
        </nav>
        <div className="hidden md:flex items-center text-sm text-gray-700 ml-auto">
          <div className={linkClassName}>Search</div>
          <div className={linkClassName}>Account</div>
          <div className={linkClassName}>Cart(0)</div>
        </div>
        <div className="flex md:hidden ml-auto py-4 px-4 hover:bg-green-200 cursor-pointer transition-all">
          <ThreeLineHorizontal />
        </div>
      </div>
    </motion.header>
  )
}

export default Header
