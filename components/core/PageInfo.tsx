import { Button, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  header: string;
  children: ReactNode;
  buttonText: string;
};

const PageInfo = ({ onClick, header, children, buttonText }: Props) => {
  return (
    <div className="py-8 px-4">
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/2">
          <Heading as="h2" size="2xl">
            {header}
          </Heading>
          <Text noOfLines={1}>
            The quick brown fox jumps over the lazy dog is an English-language
            pangram—a sentence that contains all of the letters of the English
            alphabet. Owing to its existence, Chakra was created.
          </Text>
        </div>
        <Button onClick={onClick} className="mr-8">{buttonText}</Button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default PageInfo;
