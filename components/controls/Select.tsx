import { Select as ChakraSelect, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { UseFormRegister } from "react-hook-form";

type Props = {
  placeholder?: string;
  addPlaceholder?: boolean;
  label: string;
  r: UseFormRegister<any>;
  name: string;
  children: ReactNode;
};

const Select = ({
  placeholder = "",
  label,
  addPlaceholder,
  r,
  name,
  children,
}: Props) => {
  return (
    <div>
      <Text>{label}</Text>
      <ChakraSelect
        placeholder={addPlaceholder ? label : placeholder}
        {...r(name)}
        className="my-4 bg-gray-50"
      >
        {children}
      </ChakraSelect>
    </div>
  );
};

export default Select;
