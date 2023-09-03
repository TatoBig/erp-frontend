import { Input as CkInput, Text } from "@chakra-ui/react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  placeholder?: string;
  addPlaceholder?: boolean;
  label: string;
  r: UseFormRegister<any>;
  name: string;
};

const Input = ({ placeholder = '', label, addPlaceholder, r, name }: Props) => {
  return (
    <div>
      <Text>
        {label}
      </Text>
      <CkInput placeholder={addPlaceholder ? label : placeholder} {...r(name)} className="my-4 bg-gray-50" />
    </div>
  );
};

export default Input;
