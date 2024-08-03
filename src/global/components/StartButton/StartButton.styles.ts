import { Play } from "@phosphor-icons/react"
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
    background-color: ${({ theme }) => theme.green_500};
    opacity: ${({ disabled }) => disabled && 0.5};
    color: ${({ theme }) => theme.white};
    font-weight: 600;
    font-size: 1rem;
    border-radius: 8px;
    border: 0;

    &:focus {
      outline: none;
      box-shadow: 0 0;
    }

    &:hover {
      cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    }

    margin-top: 3.5625rem;
  `,
  PlayIcon: styled(Play).attrs({ size: 20, weight: "duotone" })``,
  Title: styled.p``,
}
