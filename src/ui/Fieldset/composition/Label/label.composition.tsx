import { TextLabel } from "./styles";

interface LabelProps {
    text: string;

}

export default function FieldsetLabel({text} : LabelProps) {
  return (
    <TextLabel>
        {text}
    </TextLabel>
  )
}
