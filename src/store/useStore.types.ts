import { Cycle } from "../pages/Home/Home.types"

export type UseStoreProps = {
  history: Cycle[]
  setHistory: (newCycle: Cycle) => void
}
