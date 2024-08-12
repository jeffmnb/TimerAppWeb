import { StatusCycle } from "../Home/Home.types"

export type HistoryItemProps = {
  task: string
  time: string
  begin: string
  status: StatusCycle
}
export enum HISTORY_TITLE_ITEM {
  finished = "Finalizado",
  interrupted = "Interrompido",
  progress = "Em andamento",
}

export enum HISTORY_COLOR_STATUS {
  finished = "green_500",
  interrupted = "red_500",
  progress = "yellow_500",
}
