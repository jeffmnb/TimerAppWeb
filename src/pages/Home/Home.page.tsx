import React from "react"
import { S } from "./Home.styles.ts"
import { CountDown } from "./components/CountDown/index.ts"
import { useHomePage } from "./Home.logic.tsx"
import { Render } from "../../global/components/Render/Render.tsx"
import { TimerActions } from "./components/TimerActions/TimerActions.tsx"
import { HandPalm, Play } from "@phosphor-icons/react"
import { ActionButton } from "../../global/components/ActionButton/ActionButton.tsx"
import { FormProvider } from "react-hook-form"

export const Home: React.FC = () => {
  const {
    currentCycle,
    cycleForm,
    provideCycleTime,
    handleCreateNewCycle,
    handleInterruptCycle,
  } = useHomePage()

  const {
    formState: { isValid: isValidForm },
    handleSubmit,
  } = cycleForm

  return (
    <FormProvider {...cycleForm}>
      <S.Container>
        <TimerActions enableFields={!!currentCycle} />
        <CountDown provideCycleTime={provideCycleTime()} />
        <Render.If isTrue={!currentCycle}>
          <ActionButton
            icon={Play}
            title="Começar"
            disabled={!isValidForm}
            onClick={handleSubmit(handleCreateNewCycle)}
          />
        </Render.If>
        <Render.If isTrue={!!currentCycle}>
          <ActionButton
            icon={HandPalm}
            title="Interromper"
            disabled={isValidForm}
            onClick={handleInterruptCycle}
          />
        </Render.If>
      </S.Container>
    </FormProvider>
  )
}
