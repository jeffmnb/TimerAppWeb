import { Cycle } from "../pages/Home/Home.types"

export type UseStoreProps = {
  currentCycle: Cycle | null
  history: Cycle[] | []
  setHistory: (newHistory: Cycle[]) => void
  setCurrentCycle: (cycle: Cycle | null) => void
}
