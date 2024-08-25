import { formatDistanceToNow } from "date-fns"
import { getTimerStore } from "../../store"
import { ptBR } from "date-fns/locale"

export const useHistoryPage = () => {
  const { history } = getTimerStore()

  const formatCycleBeginDate = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true, locale: ptBR })
  }

  const formatDurationCycle = (time: number) => {
    return `${time} minutos`
  }

  return { history, formatCycleBeginDate, formatDurationCycle }
}
