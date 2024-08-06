export type HistoryItemProps = {
  task: string
  time: string
  begin: string
  status: "finished" | "stoped" | "progress"
}
export enum HISTORY_TITLE_ITEM {
  finished = "Finalizado",
  stoped = "Interrompido",
  progress = "Em andamento",
}

export enum HISTORY_COLOR_STATUS {
  finished = "green_500",
  stoped = "red_500",
  progress = "yellow_500",
  as = "",
}
