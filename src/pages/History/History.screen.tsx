import React from "react"
import { S } from "./History.styles"
import { useHistoryPage } from "./History.logic"
import { Render } from "../../global/components/Render/Render"

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
            {history.map(({ id, cycleTime, startTime, status, taskname }) => (
              <Render.If isTrue={!!taskname} key={id}>
                <S.Tr>
                  <S.Td>{taskname}</S.Td>
                  <S.Td>{cycleTime}</S.Td>
                  <S.Td>{startTime.toString()}</S.Td>
                  <S.Td>
                    <S.Status status={status} />
                  </S.Td>
                </S.Tr>
              </Render.If>
            ))}
          </S.Tbody>
        </S.Table>
      </S.TableArea>
    </S.Container>
  )
}
