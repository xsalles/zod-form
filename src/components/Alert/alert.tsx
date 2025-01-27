import { useState } from "react"
import { Close, Container, PadLock, TextAlert } from "./styles"
import CloseImage from "../../assets/icons/close-icon.svg"
import PadLockImage from "../../assets/icons/padlock-icon.svg"

export default function Alert() {

  const [isVisible, setIsVisible] = useState(true)

  const handleClose = () => {
    setIsVisible(false)
  }

  return (
    <>
    {
        isVisible && (
            <Container>
                <PadLock src={PadLockImage}/>
                <TextAlert>We take privacy issues seriously. You can be sure that your personal data is securely protected.</TextAlert>
                <Close src={CloseImage} onClick={handleClose}/>
            </Container>
        )
    }
    </>
  )
}
