import { UseFormRegister } from "react-hook-form"
import { FormSchemaInput } from "../../../pages/Home/Home.types"

export type TimerActionsProps = {
  register: UseFormRegister<FormSchemaInput>
  enableFields: boolean
}
