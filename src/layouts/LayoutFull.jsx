import { Link } from "gatsby"
import React from "react"
import { Footer, SignupForm } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <header className="bg-yellow-300 py-2">
        <div className="container px-4 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <img alt="Logo" src="/logo.svg" className="h-12 md:h-16" />
          </Link>
        </div>
      </header>
      {children}
      <div className="bg-white py-8 lg:py-16 mt-8">
        {/* <div className="container">
          <SignupForm />
        </div> */}
      </div>
      <Footer />
    </>
  )
}
