import React, { ButtonHTMLAttributes } from "react"
import { S } from "./InterruptButton.styles"

export const InterruptButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ onClick, disabled }) => {
  return (
    <S.Container onClick={onClick} disabled={disabled}>
      <S.HandPalm />
      <S.Title>Interromper</S.Title>
    </S.Container>
  )
}
