import { useState } from "react"
import { HistoryItemProps } from "./History.types"

export const useHistoryPage = () => {
  const historyMock: HistoryItemProps[] = [
    {
      begin: "Há 1 hora",
      status: "finished",
      task: "Estudar React",
      time: "25 minutos",
    },
    {
      begin: "Há 1 hora",
      status: "progress",
      task: "Estudar React 2",
      time: "25 minutos",
    },
    {
      begin: "Há 1 hora",
      status: "stoped",
      task: "Estudar React 3",
      time: "25 minutos",
    },
  ]

  const [histories, setHistories] = useState<HistoryItemProps[]>(historyMock)

  return { histories, setHistories }
}
