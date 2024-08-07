import { useForm } from "react-hook-form"

export const useHomePage = () => {
  const { register, handleSubmit, watch } = useForm()

  const isSubmitDisabled = !watch("name")

  const handleCreateNewCycle = (data) => {
    console.log(data)
  }

  return {
    handleSubmit,
    register,
    handleCreateNewCycle,
    isSubmitDisabled,
  }
}
