import { useState } from "react";
import Stepper from "./components/Stepper/stepper";
import Alert from "./components/Alert/alert";
import Button from "./ui/Button/button";
import Fieldset from "./ui/Fieldset/fieldset";
import { coutryCodes } from "./libs/phoneNumber";

function App() {
  const [progress, setProgress] = useState(1);

  const handleNextStep = () => {
    setProgress(progress + 1);
  };

  const handlePreviousStep = () => {
    if (progress > 1) {
      setProgress(progress - 1);
    }
  };

  console.log(coutryCodes[244]);

  return (
    <>
      <Stepper progress={progress} />
      <Fieldset text="Enter your phone number" />
      <Fieldset text="Email" />
      <button onClick={handlePreviousStep}>back</button>
      <button onClick={handleNextStep}>next</button>
      <Alert />
      <Button text="Send code" />
    </>
  );
}

export default App;
