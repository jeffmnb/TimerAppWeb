import React from "react"
import { Header } from "../global/components/Header"
import { S } from "./GlobalLayout.styles"

export const GlobalLayout: React.FC = () => {
  return (
    <S.GlobalLayoutContainer>
      <Header />
      <S.Outlet />
    </S.GlobalLayoutContainer>
  )
}
