import { styled } from "styled-components"
import { ButtonProps } from "./Button.types"

export const S = {
  Button: styled.button<ButtonProps>`
    /* background-color: ${({ theme }) => theme.green_300}; */
    background-color: blue;
  `,
}
