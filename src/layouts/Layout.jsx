import React from "react"
import { ModalRoutingContext } from "gatsby-plugin-modal-routing"
import "../styles/style.css"

import Rukou from '..fonts/rukou.woff2'
const globals = css`
  @font-face {
    font-family: 'Rukou';
    src: url(${Rukou}) format('woff2');
    font-weight: 500;
  }
`

import { LayoutFull } from "./LayoutFull"
import { LayoutModal } from "./LayoutModal"

export const Layout = ({ children, navigation }) => {
  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }) =>
        modal ? (
          <LayoutModal closeTo={closeTo} navigation={navigation}>
            {children}
          </LayoutModal>
        ) : (
          <LayoutFull>{children}</LayoutFull>
        )
      }
    </ModalRoutingContext.Consumer>
  )
}
