import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormSchemaInput, FormSchemaOutput } from "./Home.types"
import { formDefaultValues, formSchema } from "./Home.utils"

export const useHomePage = () => {
  const {
    register,
    handleSubmit,
    reset: resetForm,
    formState: { isValid: isValidForm },
  } = useForm<FormSchemaInput>({
    resolver: zodResolver(formSchema),
    defaultValues: formDefaultValues,
  })

  const handleCreateNewCycle = (data: FormSchemaOutput) => {
    console.log(data.name)
    resetForm()
  }

  return {
    isValidForm,
    register,
    handleSubmit,
    handleCreateNewCycle,
  }
}
