import React from "react"
import { S } from "./Home.styles"

export const Home: React.FC = () => {
  return (
    <S.Container>
      <S.ActionsContainer>
        <span>Vou trabalhar em</span>
        <input type="text" placeholder="Dê um nome para seu projeto" />
        <span>durante</span>
        <input type="text" placeholder="00" />
        <span>minutos.</span>
      </S.ActionsContainer>
      <S.CountDownContainer>
        <span>0</span>
        <span>0</span>
        <span>:</span>
        <span>0</span>
        <span>0</span>
      </S.CountDownContainer>
    </S.Container>
  )
}
