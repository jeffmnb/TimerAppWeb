import React from "react"
import { S } from "./TimerActions.styles"
import { DataListSuggestions } from "../DataListSuggestions"

export const TimerActions: React.FC = () => {
  return (
    <S.ActionsContainer>
      <S.FormText>Vou trabalhar em</S.FormText>
      <S.NameInput list="suggestions" />
      <DataListSuggestions
        id="suggestions"
        suggestions={[{ name: "Estudar programação" }]}
      />
      <S.FormText>durante</S.FormText>
      <S.TimeInput />
      <S.FormText>minutos.</S.FormText>
    </S.ActionsContainer>
  )
}
