import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "../global/components/Header"
import { GlobalLayoutContainer } from "./GlobalLayout.styles"

export const GlobalLayout: React.FC = () => {
  return (
    <GlobalLayoutContainer>
      <Header />
      <Outlet />
    </GlobalLayoutContainer>
  )
}
