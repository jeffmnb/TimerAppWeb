import React from "react"
import { S } from "./Home.styles"
import { CountDown } from "../../global/components/CountDown/index.ts"
import { StartButton } from "../../global/components/StartButton/StartButton.tsx"
import { useHomePage } from "./Home.logic.tsx"
import { TimerActions } from "../../global/components/TimerActions"

export const Home: React.FC = () => {
  const { register, handleCreateNewCycle, handleSubmit, isValidForm } =
    useHomePage()

  return (
    <S.Container>
      <TimerActions register={register} />
      <CountDown />
      <StartButton
        disabled={!isValidForm}
        onClick={handleSubmit(handleCreateNewCycle)}
      />
    </S.Container>
  )
}
