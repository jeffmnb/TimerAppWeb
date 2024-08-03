import React from "react"
import { S } from "./StartButton.styles"

export const StartButton: React.FC = () => {
  return (
    <S.Container disabled>
      <S.PlayIcon />
      <S.Title>Começar</S.Title>
    </S.Container>
  )
}
