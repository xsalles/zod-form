import { useState } from "react"
import Stepper from "./components/Stepper/stepper"
import Alert from "./components/Alert/alert"
import Button from "./ui/Button/button"
import Fieldset from "./ui/Fieldset/fieldset"

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
        <Button text="Send code"/>
        <Fieldset/>
    </>
  )
}

export default App
