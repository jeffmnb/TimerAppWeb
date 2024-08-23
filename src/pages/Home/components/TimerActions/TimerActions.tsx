import React from "react"
import { S } from "./TimerActions.styles"
import { TimerActionsProps } from "./TimerActions.types"
import { Controller } from "react-hook-form"
import { DataListSuggestions } from "../DataListSuggestions"

export const TimerActions: React.FC<TimerActionsProps> = ({
  control,
  enableFields,
}) => {
  return (
    <S.ActionsContainer>
      <S.FormText>Vou trabalhar em</S.FormText>
      <Controller
        name="taskname"
        control={control}
        render={({ field }) => (
          <S.NameInput {...field} list="suggestions" disabled={enableFields} />
        )}
      />
      <DataListSuggestions
        id="suggestions"
        suggestions={[{ name: "Estudar programação" }]} // TODO: deixar dinamico
      />
      <S.FormText>durante</S.FormText>
      <Controller
        name="cycleTime"
        control={control}
        render={({ field }) => (
          <S.TimeInput
            {...field}
            type="number"
            disabled={enableFields}
            onChange={(e) => field.onChange(parseInt(e.target.value, 10))}
          />
        )}
      />
      <S.FormText>minutos.</S.FormText>
    </S.ActionsContainer>
  )
}
