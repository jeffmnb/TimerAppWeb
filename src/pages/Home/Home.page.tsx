import React from "react"
import { S } from "./Home.styles.ts"
import { CountDown } from "../../global/components/CountDown/index.ts"
import { useHomePage } from "./Home.logic.tsx"
import { TimerActions } from "../../global/components/TimerActions/index.ts"
import { InterruptButton } from "../../global/components/InterruptButton/InterruptButton.tsx"
import { Render } from "../../global/components/Render/Render.tsx"
import { StartButton } from "../../global/components/StartButton/StartButton.tsx"

export const Home: React.FC = () => {
  const {
    isValidForm,
    actualActiveCycle,
    register,
    handleSubmit,
    provideCycleTime,
    handleCreateNewCycle,
    handleInterruptCycle,
  } = useHomePage()

  return (
    <S.Container>
      <TimerActions enableFields={!!actualActiveCycle} register={register} />
      <CountDown provideCycleTime={provideCycleTime()} />
      <Render.If isTrue={!actualActiveCycle}>
        <StartButton
          disabled={!isValidForm}
          onClick={handleSubmit(handleCreateNewCycle)}
        />
      </Render.If>
      <Render.If isTrue={!!actualActiveCycle}>
        <InterruptButton
          disabled={isValidForm}
          onClick={handleInterruptCycle}
        />
      </Render.If>
    </S.Container>
  )
}
