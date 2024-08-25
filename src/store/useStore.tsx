import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { UseStoreProps } from "./useStore.types"

const initialStoreValue = {
  history: [],
  currentCycle: null,
} as UseStoreProps

const useTimerStore = create<UseStoreProps>()(
  devtools(
    persist(
      (set) => ({
        ...initialStoreValue,
        setHistory: (newHistory) =>
          set(
            () => ({
              history: newHistory,
            }),
            false,
            "setHistory",
          ),
        setCurrentCycle: (currentCycle) =>
          set(() => ({ currentCycle }), false, "setCurrentCycle"),
      }),
      {
        name: "@timer-app-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
    {
      trace: true,
    },
  ),
)

export const getTimerStore = useTimerStore.getState
