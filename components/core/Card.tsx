import { Card as ChakraCard, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  header: string;
  children: ReactNode;
};

const Card = ({ header, children }: Props) => {
  return (
    <div className="w-full flex justify-center items-center mt-20">
      <ChakraCard className="p-4 w-1/2 ">
        <Heading as="h4" size="md">
          {header}
        </Heading>
        <div className="w-full h-px bg-gray-200 my-4"></div>
        {children}
      </ChakraCard>
    </div>
  );
};

export default Card;
