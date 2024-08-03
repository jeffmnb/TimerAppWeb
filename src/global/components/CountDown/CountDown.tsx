import React from "react"
import { S } from "./CountDown.styles"

export const CountDown: React.FC = () => {
  return (
    <S.CountDownContainer>
      <S.TimerItem>0</S.TimerItem>
      <S.TimerItem>0</S.TimerItem>
      <S.Separator>:</S.Separator>
      <S.TimerItem>0</S.TimerItem>
      <S.TimerItem>0</S.TimerItem>
    </S.CountDownContainer>
  )
}
