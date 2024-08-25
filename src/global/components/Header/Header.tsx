import React from "react"
import { S } from "./Header.styles"
import { useHeader } from "./Header.logic"

export const Header: React.FC = () => {
  const { redirectTo, isPageSelected } = useHeader()
  return (
    <S.Container>
      <S.Logo />
      <S.IconsContainer>
        <S.TimerIcon
          isActive={isPageSelected("/")}
          onClick={() => redirectTo("/")}
        />
        <S.ScrollIcon
          isActive={isPageSelected("/history")}
          onClick={() => redirectTo("/history")}
        />
      </S.IconsContainer>
    </S.Container>
  )
}
