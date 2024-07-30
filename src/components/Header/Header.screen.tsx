import React from "react"
import { S } from "./Header.styles"

export const Header: React.FC = () => {
  return (
    <S.Container>
      <S.Logo />
      <S.IconsContainer>
        <S.TimerIcon />
        <S.ScrollIcon />
      </S.IconsContainer>
    </S.Container>
  )
}
