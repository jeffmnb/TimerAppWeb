import { UseFormRegister } from "react-hook-form"
import { FormSchemaInput } from "../../Home.types"

export type TimerActionsProps = {
  register: UseFormRegister<FormSchemaInput>
  enableFields: boolean
}
