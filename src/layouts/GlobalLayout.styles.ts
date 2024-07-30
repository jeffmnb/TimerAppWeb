import { styled } from "styled-components"

export const GlobalLayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  padding: 3rem 2.5rem;
  margin: 5rem auto;
  background-color: ${({ theme }) => theme.gray_800};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`
