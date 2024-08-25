import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { differenceInSeconds } from "date-fns"
import { Cycle, FormSchemaInput, FormSchemaOutput } from "./Home.types"
import {
  formDefaultValues,
  formSchema,
  getCycleAndUpdateStatus,
  getSecondsPassed,
  returnCycleTime,
} from "./Home.utils"
import { useCallback, useEffect, useState } from "react"
import { getTimerStore } from "../../store"

export const useHomePage = () => {
  const cycleForm = useForm<FormSchemaInput>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  })
  const { reset: resetForm } = cycleForm

  const { setHistory, setCurrentCycle, currentCycle, history } = getTimerStore()

  const [cycleList, setCycleList] = useState<Cycle[]>(history)
  const [secondsPassed, setSecondsPassed] = useState<number>(getSecondsPassed())

  const handleCreateNewCycle = ({ cycleTime, taskname }: FormSchemaOutput) => {
    const newCycle: Cycle = {
      id: new Date().getTime().toString(),
      startTime: new Date(),
      cycleTime,
      taskname,
      status: "progress",
    }
    setCycleList((cycle) => [...cycle, newCycle])
    setCurrentCycle(newCycle)
    resetForm()
    setHistory([...history, newCycle])
  }

  const handleInterruptCycle = () => {
    setSecondsPassed(0)
    resetForm()
    setCycleList((currentList) =>
      currentList.map((cycle) =>
        cycle.id === currentCycle?.id
          ? { ...cycle, status: "interrupted" }
          : cycle,
      ),
    )
    getCycleAndUpdateStatus("interrupted")
  }

  const provideCycleTime = useCallback(() => {
    return returnCycleTime(
      cycleList,
      currentCycle,
      secondsPassed > 0 ? secondsPassed : 0,
    )
  }, [currentCycle, cycleList, secondsPassed])

  useEffect(() => {
    let cycleInterval: number
    if (currentCycle?.id) {
      cycleInterval = setInterval(() => {
        const timeHasPassed = differenceInSeconds(
          new Date(),
          currentCycle.startTime,
        )

        setSecondsPassed(timeHasPassed)
        if (provideCycleTime()?.secondsAmount === 1) {
          return getCycleAndUpdateStatus("finished")
        }
      }, 1000)
    }
    return () => clearInterval(cycleInterval)
  }, [currentCycle, provideCycleTime])

  useEffect(() => {
    const { finalMinutes, finalSeconds } = returnCycleTime(
      cycleList,
      currentCycle,
      secondsPassed,
    )

    if (!currentCycle) document.title = "TimerApp"
    if (currentCycle) document.title = `${finalMinutes}:${finalSeconds}`
  }, [currentCycle, cycleList, secondsPassed])

  useEffect(() => {
    if (currentCycle) {
      setCurrentCycle({
        ...currentCycle!,
        finalMinutes: provideCycleTime().finalMinutes,
        finalSeconds: provideCycleTime().finalSeconds,
      })
    }
  }, [currentCycle, provideCycleTime, setCurrentCycle])

  return {
    cycleList,
    cycleForm,
    secondsPassed,
    currentCycle,
    provideCycleTime,
    handleCreateNewCycle,
    handleInterruptCycle,
  }
}
