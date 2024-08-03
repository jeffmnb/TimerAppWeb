import React from "react"
import { S } from "./DataListSuggestions.styles"
import { DataListSuggestionsProps } from "./DataListSuggestions.types"

export const DataListSuggestions: React.FC<DataListSuggestionsProps> = ({
  id,
  suggestions,
}) => {
  return (
    <S.Suggestionslist id={id}>
      <S.SuggestionOption>{suggestions[0]?.name}</S.SuggestionOption>
    </S.Suggestionslist>
  )
}
