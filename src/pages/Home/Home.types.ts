import { formSchema } from "./Home.utils"

export type FormSchemaOutput = Zod.output<typeof formSchema>
export type FormSchemaInput = Zod.input<typeof formSchema>
