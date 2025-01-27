import { useState } from "react"
import Stepper from "./components/Stepper"
import Alert from "./components/Alert"
import Button from "./ui/Button"

function App() {

  const [progress, setProgress] = useState(1)

  const handleNextStep = () => {
    setProgress(progress + 1)
  }

  const handlePreviousStep = () => {
    if(progress > 1) {
      setProgress(progress - 1)
    }
  }

  return (
    <>
      <Stepper progress={progress}/>
      <button onClick={handlePreviousStep}>back</button>
        <button onClick={handleNextStep}>next</button>
        <Alert/>
        <Button/>
    </>
  )
}

export default App
