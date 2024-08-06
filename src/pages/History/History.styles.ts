import { styled } from "styled-components"
import {
  HISTORY_COLOR_STATUS,
  HistoryItemProps,
  HISTORY_TITLE_ITEM,
} from "./History.types"

export const S = {
  Container: styled.div`
    margin: 3.5rem 3.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  `,
  Title: styled.p`
    font-weight: bold;
    font-size: 1.5rem;
  `,
  TableArea: styled.div`
    overflow: auto;
    margin-top: 2rem;
    height: 57vh;
  `,
  Table: styled.table`
    width: 100%;
    border-collapse: collapse;
  `,
  Thead: styled.thead``,
  Tbody: styled.tbody``,
  Tr: styled.tr``,
  Th: styled.th`
    background-color: ${({ theme }) => theme.gray_600};
    padding: 1rem;
    text-align: left;
    color: ${({ theme }) => theme.gray_100};
    font-size: 0.875rem;
    line-height: 160%;

    &:first-child {
      border-top-left-radius: 8px;
      padding-left: 1.5rem;
    }

    &:last-child {
      border-top-right-radius: 8px;
      padding-right: 1.5rem;
    }
  `,
  Td: styled.td`
    background-color: ${({ theme }) => theme.gray_700};
    border-top: 4px solid ${({ theme }) => theme.gray_800};
    padding: 1rem;
    font-size: 0.875rem;
    line-height: 160%;

    &:first-child {
      padding-left: 1.5rem;
      width: 50%;
    }
  `,
  Status: styled.div<Pick<HistoryItemProps, "status">>`
    &::before {
      content: "";
      display: inline-block;
      height: 8px;
      width: 8px;
      border-radius: 50%;
      background: ${({ status, theme }) => theme[HISTORY_COLOR_STATUS[status]]};
      margin-right: 8px;
    }

    &::after {
      content: "${({ status }) => HISTORY_TITLE_ITEM[status]}";
    }
  `,
}
