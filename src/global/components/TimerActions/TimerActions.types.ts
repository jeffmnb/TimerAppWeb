import { FieldValues, UseFormRegister } from "react-hook-form"

export type TimerActionsProps = {
  nameInputRegister: UseFormRegister<FieldValues>
  timeInputRegister: UseFormRegister<FieldValues>
}
