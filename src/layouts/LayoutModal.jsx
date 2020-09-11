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
              <svg className="w-full h-full transition-colors duration-200" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m51.4 54.8q-15.7-11.2-30.4-23.6a82.8 82.8 0 0 1 10.3-8.9l16.7-12.8c3-2.3 0-7.5-3-5.2l-19 14.6a56.7 56.7 0 0 0 -14.4 14.7 3 3 0 0 0 1 4c6.2 3.3 10.9 9 16.8 12.7a162.3 162.3 0 0 0 19 9.7 3 3 0 0 0 3-5.2z" fill="currentColor"/></svg>
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
              <svg className="w-full h-full transition-colors duration-200" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m48.8 31.3-.4-.5a3.5 3.5 0 0 0 -.8-1.6 113.7 113.7 0 0 0 -11.8-13.1 53 53 0 0 0 -5.8-4.7c-2.4-1.6-5.6-2.8-7.3-5.2a3.2 3.2 0 0 0 -5-.2c-2.2 0-4.4 2-2.8 4.4 3.3 4.8 8.1 7.5 12.9 10.8a110 110 0 0 1 13.5 11c-2.1 3.4-3.9 7-6.4 10.1l-.1.2q-5.8 6.1-12.2 11.7c-3 2.5 1.3 6.7 4.3 4.2a92.8 92.8 0 0 0 12.1-11.6q5.2-5.4 9.9-11.3a3 3 0 0 0 0-4.2z" fill="currentColor"/></svg>
            </Link>
          )}
        </div>
      </div>
      <button
        className="absolute top-0 right-0 m-3 lg:m-6 focus:outline-none"
        onClick={closeModal}
      >
        <svg className="w-8 h-8 text-white hover:text-yellow-300 transition-colors duration-200" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="m58.5 8c2-3-2.3-5.7-4.7-3.5a2.9 2.9 0 0 0 -3.4.5c-3.9 3.6-5.7 8.8-9.7 12.4-3.7 3.4-8.1 5.8-11.8 9.2l-16.7-18.2c-2.6-2.8-6.9 1.4-4.3 4.3l17.1 18.3a77.9 77.9 0 0 0 -5.9 8.5 57 57 0 0 1 -12.3 14c-2.6 2.3.8 6.7 3.6 4.8 8-5.5 13.8-13.8 20.1-21.2l1.3 1.4c7 7.6 13.8 15.2 22.3 21 3.2 2.3 6.2-3 3-5.1-8.5-6-15.4-14-22.4-21.6l-.2-.2c8-8.2 17.6-15 24.1-24.5z" fill="currentColor"/></svg>
      </button>
    </div>
  )
}
