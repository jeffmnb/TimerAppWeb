import { HandPalm } from "@phosphor-icons/react"
import { styled } from "styled-components"

export const S = {
  Container: styled.button`
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    align-items: center;
    max-width: 41rem;
    width: 100%;
    height: 4rem;
    opacity: ${({ disabled }) => disabled && 0.5};
    background-color: ${({ theme }) => theme.red_500};
    color: ${({ theme }) => theme.white};
    border: 0;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 8px;
    margin-top: 3.5625rem;

    &:hover {
      cursor: pointer;
    }
  `,
  HandPalm: styled(HandPalm).attrs({ size: 20, weight: "duotone" })``,
  Title: styled.p``,
}
