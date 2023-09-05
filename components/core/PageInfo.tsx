import { Button, Divider, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  onClick?: () => void;
  header: string;
  children: ReactNode;
  buttonText?: string;
  key: string;
};

const PageInfo = ({ onClick, key, header, children, buttonText }: Props) => {
  return (
    <motion.div
      className="py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      key={key}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/2">
          <Heading as="h2" size="2xl">
            {header}
          </Heading>
          <Text>
            The quick brown fox jumps over the lazy dog is an English-language
            pangram—a sentence that contains all of the letters of the English
            alphabet. Owing to its existence, Chakra was created.
          </Text>
        </div>
        {buttonText && onClick && (
          <Button onClick={() => onClick()} className="mr-8">
            {buttonText}
          </Button>
        )}
      </div>
      <Divider className="mt-4 mb-8" />
      <div>{children}</div>
    </motion.div>
  );
};

export default PageInfo;
