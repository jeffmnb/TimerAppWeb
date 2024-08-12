import { RenderProps } from "./Render.types"

export const Render = {
  If: ({ isTrue, children }: RenderProps) => {
    if (!isTrue) return <></>
    return children
  },
}
