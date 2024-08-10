import React from "react"
import { S } from "./TimerActions.styles"
import { DataListSuggestions } from "../DataListSuggestions"
import { TimerActionsProps } from "./TimerActions.types"

export const TimerActions: React.FC<TimerActionsProps> = ({ register }) => {
  return (
    <S.ActionsContainer>
      <S.FormText>Vou trabalhar em</S.FormText>
      <S.NameInput {...register("name")} list="suggestions" />
      <DataListSuggestions
        id="suggestions"
        suggestions={[{ name: "Estudar programação" }]}
      />
      <S.FormText>durante</S.FormText>
      <S.TimeInput {...register("time", { valueAsNumber: true })} />
      <S.FormText>minutos.</S.FormText>
    </S.ActionsContainer>
  )
}
