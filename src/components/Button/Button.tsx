import React from "react"
import { S } from "./Button.styles"
import { ButtonProps } from "./Button.types"

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  title,
}) => {
  return (
    <S.Button title={title} size={size} variant={variant}>
      {title}
    </S.Button>
  )
}
