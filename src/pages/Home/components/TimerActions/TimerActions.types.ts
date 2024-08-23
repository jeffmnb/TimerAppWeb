import { Control } from "react-hook-form"

export type TimerActionsProps = {
  control: Control<
    {
      taskname: string
      cycleTime: number
    },
    any
  >
  enableFields: boolean
}
