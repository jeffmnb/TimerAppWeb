import { create } from "zustand"
import { createJSONStorage, devtools, persist } from "zustand/middleware"
import { UseStoreProps } from "./useStore.types"

const initialStoreValue = {
  history: [
    {
      cycleTime: 0,
      id: "",
      startTime: new Date(),
      status: "finished",
      taskname: "",
    },
  ],
} as UseStoreProps

export const useStore = create<UseStoreProps>()(
  devtools(
    persist(
      (set) => ({
        ...initialStoreValue,
        setHistory: (newCycle) =>
          set(
            ({ history }) => ({
              history: [...history, newCycle],
            }),
            false,
            "setHistory",
          ),
      }),
      {
        name: "@timer-app-store",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
)
