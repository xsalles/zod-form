import CreatableSelect from "react-select/creatable";
import { coutryCodes } from "../../../../libs/phoneNumber";
import { Container, Input } from "./styles";
import { StylesConfig } from "react-select";

interface OptionProps {
  value: string;
  label: string;
}

export default function FieldsetInput() {
  const options: OptionProps[] = coutryCodes.map((code) => {
    return {
      label: `${code}`,
      value: code.code,
    };
  });

  const customStyles: StylesConfig<OptionProps> = {
    control: (provided) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: 500,
      color: "#333333",
      width: "80px",
      height: "44px",
      border: "none",
      outline: "none",
      borderBottom: "1px solid #E2E4E5",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: 500,
      color: "#333333",
      width: "80px",
      height: "44px",
      borderRadius: "4px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontSize: "12px",
      fontWeight: 500,
      color: "#333333",
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: 500,
      color: "#333333",
    }),
    menu: (provided) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: 500,
      color: "#333333",
    }),
    valueContainer: (provided) => ({
      ...provided,
      fontSize: "14px",
      fontWeight: 500,
      color: "#333333",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      width: "30px",
      height: "30px",
      display: "flex",
      alignItems: "center",
    }),
    clearIndicator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  return (
    <Container>
      <CreatableSelect
        options={options}
        formatCreateLabel={(inputValue) => `${inputValue}`}
        formatOptionLabel={({ value }: OptionProps) => `+${value}`}
        isClearable
        isSearchable
        styles={customStyles}
        placeholder="DDD"
      />
      <Input />
    </Container>
  );
}
