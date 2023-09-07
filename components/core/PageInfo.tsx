import { Button, Divider, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  onClick?: () => void;
  header: string;
  children: ReactNode;
  buttonText?: string;
  description?: string;
};

const PageInfo = ({
  onClick,
  header,
  children,
  buttonText,
  description,
}: Props) => {
  return (
    <motion.div
      className="py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center mb-8">
        <div className="w-1/2">
          <Heading as="h2" size="2xl">
            {header}
          </Heading>
          <Text>{description}</Text>
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
