import { getTimerStore } from "../../store"

export const useHistoryPage = () => {
  const { history } = getTimerStore()
  return { history }
}
