import { Icon } from "@phosphor-icons/react"
import { ButtonHTMLAttributes } from "react"

export type ActionButtonProps = {
  icon: Icon
  title: string
} & ButtonHTMLAttributes<HTMLButtonElement>
