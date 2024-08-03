import { styled } from "styled-components"

const BaseInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 2px solid ${({ theme }) => theme.gray_500};
  font-weight: bold;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.gray_500};
  padding-bottom: 8px;
  text-align: center;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.green_500};
    outline: none;
    box-shadow: 0 0;

    &::placeholder {
      opacity: 0;
    }
  }
`

export const S = {
  ActionsContainer: styled.div`
    display: flex;
    gap: 8px;
  `,
  FormText: styled.span`
    font-weight: bold;
    font-size: 1.125rem;
  `,
  NameInput: styled(BaseInput).attrs({
    type: "text",
    placeholder: "Dê um nome para seu projeto",
  })`
    flex: 1;
  `,
  TimeInput: styled(BaseInput).attrs({
    type: "number",
    placeholder: "00",
    step: 5,
    min: 0,
    max: 60,
  })`
    width: 4.5rem;
  `,
}
