import { styled } from "styled-components"

export const S = {
  CountDownContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 4rem;
    gap: 1rem;
  `,
  TimerItem: styled.span`
    font-family: "Roboto Mono", monospace;
    font-size: 10rem;
    font-weight: bold;
    line-height: 8rem;
    background-color: ${({ theme }) => theme.gray_700};
    color: ${({ theme }) => theme.gray_100};
    padding: 2rem 1rem;
    border-radius: 8px;
  `,
  Separator: styled.p`
    font-size: 10rem;
    font-weight: bold;
    background-color: transparent;
    color: ${({ theme }) => theme.green_500};
    border: 50%;
    padding: 0;
    align-items: center;
  `,
}
