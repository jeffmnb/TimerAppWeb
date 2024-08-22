import React from "react"
import { S } from "./History.styles"
import { useHistoryPage } from "./History.logic"

export const History: React.FC = () => {
  const { history } = useHistoryPage()

  return (
    <S.Container>
      <S.Title>Meu Histórico</S.Title>
      <S.TableArea>
        <S.Table>
          <S.Thead>
            <S.Tr>
              <S.Th>Tarefa</S.Th>
              <S.Th>Duração</S.Th>
              <S.Th>Início</S.Th>
              <S.Th>Status</S.Th>
            </S.Tr>
          </S.Thead>
          <S.Tbody>
            {history.map(({ begin, status, task, time }) => (
              <S.Tr key={task}>
                <S.Td>{task}</S.Td>
                <S.Td>{time}</S.Td>
                <S.Td>{begin}</S.Td>
                <S.Td>
                  <S.Status status={status} />
                </S.Td>
              </S.Tr>
            ))}
          </S.Tbody>
        </S.Table>
      </S.TableArea>
    </S.Container>
  )
}
