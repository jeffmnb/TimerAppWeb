import React from "react"
import { S } from "./Header.styles"
import { useHeader } from "./Header.logic"

export const Header: React.FC = () => {
  const { redirectTo } = useHeader()
  return (
    <S.Container>
      <S.Logo />
      <S.IconsContainer>
        <S.TimerIcon onClick={() => redirectTo("/")} />
        <S.ScrollIcon onClick={() => redirectTo("/history")} />
      </S.IconsContainer>
    </S.Container>
  )
}
