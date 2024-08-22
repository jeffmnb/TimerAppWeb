import { useStore } from "../../store"

export const useHistoryPage = () => {
  // const [histories, setHistories] = useState<HistoryItemProps[]>()
  const { history } = useStore()
  return { history }
}
