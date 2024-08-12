import React from "react"
import { Route, Routes } from "react-router-dom"
import { Home } from "../pages/Home"
import { History } from "../pages/History"
import { GlobalLayout } from "../layouts/GlobalLayout"

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route element={<GlobalLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
