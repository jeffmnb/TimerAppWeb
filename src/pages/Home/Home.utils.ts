import * as zod from "zod"
import { FormSchemaInput } from "./Home.types"

export const formSchema = zod.object({
  name: zod.string().min(1, "Informe a tarefa"),
  time: zod
    .number({ message: "Ciclo obrigatório" })
    .min(5, "Ciclo deve ter ao menos 5 minutos")
    .max(60, "Ciclo deve ter no máximo 60 minutos"),
})

export const formDefaultValues: FormSchemaInput = {
  name: "",
  time: 0,
}
