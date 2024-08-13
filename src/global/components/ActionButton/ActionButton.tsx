import React from "react"
import { S } from "./ActionButton.styles"
import { ActionButtonProps } from "./ActionButton.types"

export const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  disabled,
  icon: Icon,
  title,
}) => {
  return (
    <S.Container icon={Icon} onClick={onClick} disabled={disabled}>
      <Icon size={20} weight="duotone" />
      <S.Title>{title}</S.Title>
    </S.Container>
  )
}
