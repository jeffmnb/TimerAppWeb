import { styled } from "styled-components"
import Logo from "../../../assets/logo.svg"
import { Timer, Scroll } from "@phosphor-icons/react"
import { TimerIconProps } from "./Header.types"

export const S = {
  Container: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Logo: styled.img.attrs({ src: Logo })`
    width: 2.2rem;
    height: 2.2rem;
    cursor: pointer;
  `,
  IconsContainer: styled.div`
    display: flex;
    gap: 2.0938rem;
  `,
  TimerIcon: styled(Timer)
    .withConfig({
      shouldForwardProp: (prop) => prop !== "isActive",
    })
    .attrs({ size: 28 })<TimerIconProps>`
  cursor: pointer;
  transition: color 0.2s;
  color: ${({ theme, isActive }) => isActive && theme.green_500};
  &:hover {
    color: ${({ theme }) => theme.green_500};
  }
`,
  ScrollIcon: styled(Scroll)
    .attrs({ size: 28 })
    .withConfig({
      shouldForwardProp: (prop) => prop !== "isActive",
    })<TimerIconProps>`
    cursor: pointer;
    transition: color 0.2s;
    color: ${({ theme, isActive }) => isActive && theme.green_500};
    &:hover {
      color: ${({ theme }) => theme.green_500};
    }
  `,
}
