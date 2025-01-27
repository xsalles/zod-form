import FieldsetInput from "./composition/Input/input.composition";
import FieldsetLabel from "./composition/Label/label.composition";
import { Container } from "./styles";

interface FieldsetProps {
  text: string;
}

export default function Fieldset({ text }: FieldsetProps) {
  return (
    <Container>
      <FieldsetLabel text={text} />
      <FieldsetInput />
    </Container>
  );
}
