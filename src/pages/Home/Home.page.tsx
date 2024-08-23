import React from "react"
import { S } from "./Home.styles.ts"
import { CountDown } from "./components/CountDown/index.ts"
import { useHomePage } from "./Home.logic.tsx"
import { Render } from "../../global/components/Render/Render.tsx"
import { TimerActions } from "./components/TimerActions/TimerActions.tsx"
import { HandPalm, Play } from "@phosphor-icons/react"
import { ActionButton } from "../../global/components/ActionButton/ActionButton.tsx"

export const Home: React.FC = () => {
  const {
    isValidForm,
    actualActiveCycle,
    control,
    handleSubmit,
    provideCycleTime,
    handleCreateNewCycle,
    handleInterruptCycle,
  } = useHomePage()

  return (
    <S.Container>
      <TimerActions enableFields={!!actualActiveCycle} control={control} />
      <CountDown provideCycleTime={provideCycleTime()} />
      <Render.If isTrue={!actualActiveCycle}>
        <ActionButton
          icon={Play}
          title="Começar"
          disabled={!isValidForm}
          onClick={handleSubmit(handleCreateNewCycle)}
        />
      </Render.If>
      <Render.If isTrue={!!actualActiveCycle}>
        <ActionButton
          icon={HandPalm}
          title="Interromper"
          disabled={isValidForm}
          onClick={handleInterruptCycle}
        />
      </Render.If>
    </S.Container>
  )
}
