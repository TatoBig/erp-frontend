import { Button, Card, Divider, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  onClick?: () => void;
  header: string;
  children: ReactNode;
  buttonText?: string;
  handleSubmit: (e: any) => void;
  hideButton?: boolean;
};

const PageForm = ({
  onClick,
  header,
  children,
  buttonText,
  handleSubmit,
  hideButton,
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
        <div className="w-full">
          <div className="w-1/2">
            <Heading as="h2" size="2xl">
              {header}
            </Heading>
          </div>
          <Divider className="mt-4" />
        </div>
        {buttonText && onClick && (
          <Button onClick={() => onClick()} className="mr-8">
            {buttonText}
          </Button>
        )}
      </div>
      <div className="w-full flex justify-center items-center mt-20">
        <Card className="p-4 w-1/2 ">
          <Heading as="h4" size="md">
            {header}
          </Heading>
          <div className="w-full h-px bg-gray-200 my-4"></div>
          <form onSubmit={(e) => handleSubmit(e)}>
            {children}
            <div className="flex justify-end">
              {!hideButton && (
                <Button
                  className="bg-blue-600 text-white hover:bg-blue-500"
                  type="submit"
                >
                  Aceptar
                </Button>
              )}
            </div>
          </form>
        </Card>
      </div>
    </motion.div>
  );
};

export default PageForm;
