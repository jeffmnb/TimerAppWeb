import { formSchema } from "./Home.utils"

export type FormSchemaOutput = Zod.output<typeof formSchema>
export type FormSchemaInput = Zod.input<typeof formSchema>

export type Cycle = {
  id: string
  taskname: string
  cycleTime: number
  startTime: Date
  status: StatusCycle
}

export type StatusCycle = "finished" | "interrupted" | "progress"
