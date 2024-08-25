import { useNavigate } from "react-router-dom"

export const useHeader = () => {
  const navigate = useNavigate()

  const redirectTo = (destination: string) => {
    navigate(destination)
  }

  const isPageSelected = (page: string) => location.pathname === page

  return { redirectTo, isPageSelected }
}
