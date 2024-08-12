import { Outlet } from "react-router-dom"
import { styled } from "styled-components"

export const S = {
  GlobalLayoutContainer: styled.div`
    max-width: 74rem;
    height: 90vh;
    padding: 3rem 2.5rem;
    margin: 5rem auto;
    background-color: ${({ theme }) => theme.gray_800};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  `,
  Outlet: styled(Outlet)``,
}
