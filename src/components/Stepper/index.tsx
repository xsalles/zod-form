import { Circle, Container, Line } from "./styles"

interface StepperProps {
  progress: number
}

export default function Stepper({progress}: StepperProps) {
  return (
    <Container>
        <Circle isActive={progress >= 1}/>
        <Line isActive={progress >= 2}/>
        <Circle isActive={progress >= 2}/>
        <Line isActive={progress >= 3}/>
        <Circle isActive={progress >= 3}/>
    </Container>
  )
}
