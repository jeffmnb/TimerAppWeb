import * as zod from "zod"
import { Cycle, FormSchemaInput } from "./Home.types"

export const formSchema = zod.object({
  taskname: zod.string().min(1, "Informe a tarefa"),
  cycleTime: zod
    .number({ message: "Ciclo obrigatório" })
    .min(0.1, "Ciclo deve ter ao menos 5 minutos")
    .max(60, "Ciclo deve ter no máximo 60 minutos"),
})

export const formDefaultValues: FormSchemaInput = {
  taskname: "",
  cycleTime: 0,
}

export const returnCycleTime = (
  cycleList: Cycle[],
  actualActiveCycle: Cycle | null,
  secondsPassed: number,
) => {
  const activeCycle = cycleList.find(({ id }) => id === actualActiveCycle?.id)

  const totalSeconds = activeCycle ? activeCycle.cycleTime * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - secondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const finalMinutes = String(minutesAmount).padStart(2, "0")
  const finalSeconds = String(secondsAmount).padStart(2, "0")

  return { finalMinutes, finalSeconds }
}
