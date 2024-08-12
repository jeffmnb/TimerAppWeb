import React from "react"
import { S } from "./CountDown.styles"
import { CountDownProps } from "./CountDown.types"

export const CountDown: React.FC<CountDownProps> = ({
  returnCycleTime: { finalMinutes, finalSeconds },
}) => {
  return (
    <S.CountDownContainer>
      <S.TimerItem>{finalMinutes[0]}</S.TimerItem>
      <S.TimerItem>{finalMinutes[1]}</S.TimerItem>
      <S.Separator>:</S.Separator>
      <S.TimerItem>{finalSeconds[0]}</S.TimerItem>
      <S.TimerItem>{finalSeconds[1]}</S.TimerItem>
    </S.CountDownContainer>
  )
}
