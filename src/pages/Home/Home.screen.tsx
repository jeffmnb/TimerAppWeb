import React from "react"
import { S } from "./Home.styles"
import { CountDown } from "../../global/components/CountDown/index.ts"
import { TimerActions } from "../../global/components/TimerActions/TimerActions.tsx"
import { StartButton } from "../../global/components/StartButton/StartButton.tsx"

export const Home: React.FC = () => {
  return (
    <S.Container>
      <TimerActions />
      <CountDown />
      <StartButton />
    </S.Container>
  )
}
