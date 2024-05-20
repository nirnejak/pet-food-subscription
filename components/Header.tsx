import * as React from "react"
import Logo from "./Logo"

interface Props {}

const linkClassName =
  "py-4 px-4 hover:bg-green-100 cursor-pointer transition-all"

const Header: React.FC<Props> = () => {
  return (
    <header>
      <div className="bg-green-900 text-green-50 text-sm py-3 text-center flex justify-center gap-2 items-center">
        <p>You've been gifted 50% off your first purchase! | </p>
        <p>REDEEM NOW</p>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <Logo />
          <div>
            <p className="text-gray-700 font-semibold">
              Fresh & Raw Beef for Dogs
            </p>
            <p className="text-xs text-slate-400">
              By <span className="font-semibold">CrudoPerro.com</span>
            </p>
          </div>
        </div>
        <nav className="flex items-center ml-10 text-sm text-gray-700">
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
        <div className="flex items-center text-sm text-gray-700 ml-auto">
          <div className={linkClassName}>Search</div>
          <div className={linkClassName}>Account</div>
          <div className={linkClassName}>Cart(0)</div>
        </div>
      </div>
    </header>
  )
}

export default Header
