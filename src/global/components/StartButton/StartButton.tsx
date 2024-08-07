import React, { ButtonHTMLAttributes } from "react"
import { S } from "./StartButton.styles"

export const StartButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  disabled,
}) => {
  return (
    <S.Container onClick={onClick} disabled={disabled}>
      <S.PlayIcon />
      <S.Title>Começar</S.Title>
    </S.Container>
  )
}
