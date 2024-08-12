import React from "react"
import { S } from "./TimerActions.styles"
import { DataListSuggestions } from "../DataListSuggestions"
import { TimerActionsProps } from "./TimerActions.types"

export const TimerActions: React.FC<TimerActionsProps> = ({
  register,
  enableFields,
}) => {
  return (
    <S.ActionsContainer>
      <S.FormText>Vou trabalhar em</S.FormText>
      <S.NameInput
        {...register("taskname")}
        list="suggestions"
        disabled={enableFields}
      />
      <DataListSuggestions
        id="suggestions"
        suggestions={[{ name: "Estudar programação" }]} // TODO: deixar dinamico
      />
      <S.FormText>durante</S.FormText>
      <S.TimeInput
        {...register("cycleTime", { valueAsNumber: true })}
        disabled={enableFields}
      />
      <S.FormText>minutos.</S.FormText>
    </S.ActionsContainer>
  )
}
