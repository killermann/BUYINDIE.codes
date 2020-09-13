import { Link } from "gatsby"
import React from "react"
import { Footer, SignupForm } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <header className="bg-yellow-300 py-2">
        <div className="container px-4 flex items-center justify-between">
          <Link to="/" className="inline-block">
            <svg className="h-12 md:h-16" alt="BUYINDIE Logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4697.5 1425.9"><path d="M1444 676a69 69 0 00-31-41l-16-7a69 69 0 00-37 1c-37 5-73 15-110 23s-75 18-112 28c-35 9-70 20-104 30l-111 35-6 1 17-208c32-9 64-19 97-27l123-33c16-5 33-8 49-12 26-7 52-11 78-20a65 65 0 0043-44 63 63 0 00-28-71 81 81 0 00-20-9 282 282 0 00-30-3 63 63 0 00-41 19l-20 5-53 14-85 23-105 30 8-142c3-66 5-133 6-199a69 69 0 10-137 0 12209 12209 0 01-16 382l-151 49-86 28 13-206 8-127a68 68 0 00-18-45 57 57 0 00-65-26 79 79 0 00-35 21 167 167 0 00-28 45 214 214 0 00-14 36c-2 11-4 22-4 34a57 57 0 001 24 53 53 0 0018 27l-17 266-66 23c-35 12-69 26-103 39-71 27-142 55-214 78a58 58 0 0031 111c63-20 124-44 186-66l158-58-13 199-264 80a69 69 0 0036 132l220-66-2 31-3 94a380 380 0 006 101 68 68 0 00132-36l-1-6c-3-39 1-80 2-119l5-107 192-58 35-11-6 63-16 175-8 105-4 48a131 131 0 002 41 69 69 0 0051 54 68 68 0 0076-32 66 66 0 007-51l3-45 5-54 8-103 24-245 255-77c41-12 82-21 123-32l59-13 36-8a70 70 0 0014-2l6-1a69 69 0 0048-85zM776 790l-232 71 6-95 7-110q118-40 237-76l-18 210z" fill="#fff"/><path d="M1287 398h-275v635h209c58 0 110-20 148-54a174 174 0 0056-129c0-39-11-73-32-101 59-34 96-96 96-161 0-52-19-100-54-134-37-36-88-56-148-56zm10 446c0 38-30 65-71 65h-87V776h82c46 0 76 27 76 68zm45-211a94 94 0 01-63 20h-140V522h147c23 0 43 7 57 20 12 12 19 28 19 46s-7 34-20 45zm533 169a108 108 0 01-32 80 111 111 0 01-78 30 110 110 0 01-78-31 109 109 0 01-32-79V398h-128v404a236 236 0 00238 238c64 0 124-25 168-68a236 236 0 0070-170V398h-128zm414-151l-121-253h-138l184 384v251h127V787l287-389h-157l-182 253zm366-253h127v635h-127zm561 399l-266-399h-122v635h125V630l271 402h117V399h-125v399zm614-308c-60-58-144-91-235-91h-208v634h192c50 0 97-7 140-23 41-15 78-37 109-65a290 290 0 0070-101c17-39 25-82 25-128a312 312 0 00-93-226zm-36 226c0 54-19 103-53 137-36 36-87 55-146 55h-81V524h80c62 0 113 19 149 55 33 34 51 81 51 136zm165-317h127v635h-127zm596 378V653h-296V522h287V398h-415v635h347V909h-219V776h296zm55 102c-45 0-83 36-83 78 0 20 9 40 25 55a88 88 0 0058 23c23 0 45-8 61-23s26-34 26-55c0-43-39-78-87-78z" fill="#2b2c42"/></svg>
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
