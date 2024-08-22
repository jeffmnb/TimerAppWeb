import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { differenceInSeconds } from "date-fns"
import { Cycle, FormSchemaInput, FormSchemaOutput } from "./Home.types"
import { formDefaultValues, formSchema, returnCycleTime } from "./Home.utils"
import { useEffect, useState } from "react"
import { useStore } from "../../store"

export const useHomePage = () => {
  const {
    control,
    register,
    handleSubmit,
    reset: resetForm,
    formState: { isValid: isValidForm },
  } = useForm<FormSchemaInput>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  })

  const { setHistory } = useStore()

  const [cycleList, setCycleList] = useState<Cycle[]>([])
  const [actualActiveCycle, setActualActiveCycle] = useState<Cycle | null>(null)
  const [secondsPassed, setSecondsPassed] = useState<number>(0)

  const handleCreateNewCycle = ({ cycleTime, taskname }: FormSchemaOutput) => {
    const newCycle: Cycle = {
      id: new Date().getTime().toString(),
      startTime: new Date(),
      cycleTime,
      taskname,
      status: "progress",
    }
    setCycleList((cycle) => [...cycle, newCycle])
    setActualActiveCycle(newCycle)
    resetForm()
    setHistory(newCycle)
  }

  const handleInterruptCycle = () => {
    setActualActiveCycle(null)
    setSecondsPassed(0)
    resetForm()

    setCycleList((currentList) =>
      currentList.map((cycle) =>
        cycle.id === actualActiveCycle?.id
          ? { ...cycle, status: "interrupted" }
          : cycle,
      ),
    )
  }

  const provideCycleTime = () => {
    return returnCycleTime(cycleList, actualActiveCycle, secondsPassed)
  }

  useEffect(() => {
    let cycleInterval: number
    if (actualActiveCycle?.id) {
      cycleInterval = setInterval(() => {
        setSecondsPassed(
          differenceInSeconds(new Date(), actualActiveCycle.startTime),
        )
      }, 1000)
    }
    return () => clearInterval(cycleInterval)
  }, [actualActiveCycle])

  useEffect(() => {
    const { finalMinutes, finalSeconds } = returnCycleTime(
      cycleList,
      actualActiveCycle,
      secondsPassed,
    )

    if (!actualActiveCycle) document.title = "TimerApp"
    if (actualActiveCycle) document.title = `${finalMinutes}:${finalSeconds}`
  }, [actualActiveCycle, cycleList, secondsPassed])

  return {
    control,
    cycleList,
    isValidForm,
    secondsPassed,
    actualActiveCycle,
    register,
    handleSubmit,
    provideCycleTime,
    handleCreateNewCycle,
    handleInterruptCycle,
  }
}
