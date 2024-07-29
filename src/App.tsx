import { Button } from "./components/Button/Button"

function App() {
  return (
    <>
      <Button title="sm" variant="primary" size="sm" />
      <Button title="md" variant="secondary" size="md" />
      <Button title="lg" variant="success" size="lg" />
      <Button title="xl" variant="error" size="xl" />
      <Button title="default" />
    </>
  )
}

export default App
