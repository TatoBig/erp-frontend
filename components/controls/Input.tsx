import { Input as CkInput, Text } from "@chakra-ui/react";
import { HTMLInputTypeAttribute } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  placeholder?: string;
  addPlaceholder?: boolean;
  label: string;
  r: UseFormRegister<any>;
  name: string;
  type?: HTMLInputTypeAttribute;
};

const Input = ({
  placeholder = "",
  label,
  addPlaceholder,
  r,
  name,
  type,
}: Props) => {
  return (
    <div>
      <Text>{label}</Text>
      <CkInput
        type={type}
        placeholder={addPlaceholder ? label : placeholder}
        {...r(name)}
        className="my-4 bg-gray-50"
      />
    </div>
  );
};

export default Input;
