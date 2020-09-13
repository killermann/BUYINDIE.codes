import { navigate } from "gatsby"
import { Link } from "gatsby-plugin-modal-routing"
import React, { useEffect } from "react"

export const LayoutModal = ({ children, closeTo, navigation = {} }) => {
  const { current = -1, items = [] } = navigation
  const previous = items[current - 1] ? items[current - 1] : null
  const next = items[current + 1] ? items[current + 1] : null

  const closeModal = () => {
    navigate(closeTo, { state: { noScroll: true } })
  }

  const goPrevious = () => {
    if (!previous) {
      return
    }
    navigate(previous, {
      state: { navigation: { current: current - 1, items }, modal: true },
    })
  }

  const goNext = () => {
    if (!next) {
      return
    }
    navigate(next, {
      state: { navigation: { current: current + 1, items }, modal: true },
    })
  }

  const keyboardNavigation = event => {
    switch (event.keyCode) {
      case 37:
        goPrevious()
        break
      case 39:
        goNext()
        break
      case 27:
        closeModal()
        break
      default:
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyboardNavigation)
    return () => {
      window.removeEventListener("keydown", keyboardNavigation)
    }
  })

  return (
    <div className="flex relative h-screen">
      <div className="flex flex-wrap items-end md:items-center justify-center mx-auto w-full max-w-screen-xl">
        <div className="order-3 md:order-first pb-2 w-10 mx-2 md:mx-4">
          {previous && (
            <Link
              asModal
              className="inline-block w-10 h-10 text-white hover:text-yellow-300"
              state={{ navigation: { current: current - 1, items } }}
              to={previous}
            >
              <svg  className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M46.1 55.6v-.2a3.7 3.7 0 00-.8-1.5l-2.7-3.3-1.6-1.9-.5-.6-1.6-2.2-3.4-4.6-5.4-7.2-.4-.5-1.6-2-.6-.6a154 154 0 015.8-9.6l1-1.5 2.5-3.9 3.4-6a4.2 4.2 0 00.3-2.7 4.1 4.1 0 00-1.7-2.2l-1.2-.4h-.2a3.3 3.3 0 00-1.7-.4 3.7 3.7 0 00-3 1.6l-1.2 2-6.8 11.3-3 4.9-.9 1.3-1.7 2.8a6.1 6.1 0 00-.7 1 3.3 3.3 0 00-.5 2.6l.5 1.1a2.4 2.4 0 00-.6 1.7 9.7 9.7 0 00.3 1.8.9.9 0 00.1.5 3 3 0 001.3 1.9 3.1 3.1 0 001.9.3l1 1.2 1.8 2 3.2 4 3 4a5.7 5.7 0 01.8 1.3l.8 1.1 1.6 2.2a3.6 3.6 0 003.9.7l.5.6.4.5a18.1 18.1 0 001.8 2.1 3.2 3.2 0 002.5 1 3.1 3.1 0 002.4-1 3.2 3.2 0 001.1-2.4z" fill="currentColor"/></svg>
            </Link>
          )}
        </div>
        <div className="container w-full mt-12 md:mt-0 mx-3 md:mx-0 md:flex-1 bg-white shadow-lg rounded-lg overflow-hidden">
          {children}
        </div>
        <div className="order-last pb-2 w-10 mx-2 md:mx-4">
          {next && (
            <Link
              asModal
              className="inline-block w-10 h-10 text-white hover:text-yellow-300"
              state={{ navigation: { current: current + 1, items } }}
              to={next}
            >              
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M45.5 23.6a6.9 6.9 0 00-.5-1.3l-.7-.8-.8-.8v-.2l-1.7-1.9-4.1-4.2-3.7-3.7-3.6-3.4-.4-.4a4.6 4.6 0 00-.7-.7 6 6 0 00-2.6-1.4h-1.9a3.1 3.1 0 00-1.5 1l-.2-.2-.6-.5a3.6 3.6 0 00-4.3-.5 3.6 3.6 0 00-1.7 2.1v1a3.9 3.9 0 00.4 1.8 2 2 0 01.4.8 3.9 3.9 0 002 1.7l.3.2 3.9 4 2 2 2.1 2.3 5 5.1.8.7 1.9 1.9-2.1 2.9-1.3 1.8-.6.9-2.6 3.7-.5.9-3.2 4.9-1.2 1.7-.2.4-.8 1.2-.2.4h-.1l-.3.5-.3.8a2.8 2.8 0 00-.1.9 2.6 2.6 0 00.5 1.9l-.3.6v.2l-.3.6v.2a7.6 7.6 0 00-.8 2l-.2.3a3.7 3.7 0 00-.5 1.7 2.7 2.7 0 002 2.7h.7a3 3 0 001.6-.5 3.3 3.3 0 002.5-1.1 23.4 23.4 0 002.4-3.1l.4-.6.7-.9 1.1-1.6 1-1.5 2.3-3.4 4.8-7 5-7.5 1.2-1.8.6-1a1.8 1.8 0 00.5-.7 3.6 3.6 0 00.8-2.3 3.6 3.6 0 00-2.3-2.8z" fill="currentColor"/></svg>
            </Link>
          )}
        </div>
      </div>
      <button
        className="absolute top-0 right-0 m-3 lg:m-6 focus:outline-none"
        onClick={closeModal}
      >
        <svg className="w-8 h-8 text-white hover:text-yellow-300"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M56.8,5.6a4.2,4.2,0,0,0-1.1-4.1A4.3,4.3,0,0,0,52.8.3a3.7,3.7,0,0,0-2.1.6h0a9.3,9.3,0,0,0-2.8,2.8l-.8,1.2-.3.4c-.4.8-.9,1.5-1.4,2.3l-.3.5L43,10.6l-1,1.3L36.3,19c-1.8,2.2-3.7,4.7-5.7,7.3L23,18.8,15.9,12a4.4,4.4,0,0,0-6,0h0a4.3,4.3,0,0,0-1.2,3.1A3.8,3.8,0,0,0,9.9,18L11,19c1.2,1.1,2.4,2.2,3.5,3.4l11,10.7c-2.3,3.1-4.8,6.6-7.2,10.1L14,49.4l-.9,1.3H12a4.2,4.2,0,0,0-2.4,2v.3c-.7,1.5-1.3,3-1.9,4.5a4.1,4.1,0,0,0,3.5,6.1A4.7,4.7,0,0,0,14.5,62l2-2.5L19,55.9l.9-1.2,3.8-5.5,1.2-1.7,6.2-8.7.5.6,1.5,1.5,4.2,4.2.7.8c3.7,3.7,7.5,7.5,11.4,11.1a4.6,4.6,0,0,0,3,1.2,3.7,3.7,0,0,0,2.1-.6,4.1,4.1,0,0,0,2-2.8,3.7,3.7,0,0,0-.5-3.1l-1.5-1.9a3.9,3.9,0,0,1-.8-1l-1-1.2c-1.4-1.9-2.7-3.9-4-5.9A3.9,3.9,0,0,0,44.1,40c-.6-.6-1.1-1.2-1.7-1.7L39.3,35l-3-3c2.8-3.7,5.8-7.5,8.9-11.3L47,18.6a3.5,3.5,0,0,0,1.4-.6l.7-.5h.2a4.2,4.2,0,0,0,1-1.7,24.8,24.8,0,0,1,1.8-3.1l.8-1.3,3-3.9h0l.2-.3A5.2,5.2,0,0,0,56.8,5.6Z" fill="currentColor"/></svg>

      </button>
    </div>
  )
}
